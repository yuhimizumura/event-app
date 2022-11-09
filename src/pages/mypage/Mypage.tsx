import React, {ChangeEvent, useEffect, useState} from 'react';
import Header from "../../component/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import Footer from "../../component/footer/Footer";
import signInUserSet, {signInUserRemove} from "../../redux/actions/user";
import {categoryData, fetchS3Objects, isEmpty, prefList} from "../../util/util";
import {addUserRemove} from "../../redux/actions/add";
import Image from "../../component/Image/Image";
import {fetchUser, upUser} from "../../services/user";
import Amplify, {Storage, Auth} from "aws-amplify";
import awsconfig from "../../aws-exports";

const guest_icon = require("../../assets/img/mypage/icon_user_1.svg")

import { S3Client, HeadObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'

const config = {
    aws_project_region: awsconfig.aws_project_region,
    aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
    aws_appsync_region: awsconfig.aws_appsync_region,
    aws_appsync_authenticationType: awsconfig.aws_appsync_authenticationType,
    Auth: {
        identityPoolId: awsconfig.aws_cognito_identity_pool_id,
        region: awsconfig.aws_cognito_region,
        identityPoolRegion: awsconfig.aws_cognito_region,
        userPoolId: awsconfig.aws_user_pools_id,
        userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
    },
    Storage: {
        AWSS3: {
            bucket: awsconfig.aws_user_files_s3_bucket, //REQUIRED -  Amazon S3 bucket name
            region: awsconfig.aws_user_files_s3_bucket_region, //OPTIONAL -  Amazon service region
        }
    }
};

Amplify.configure(config);

type category = {
    key: string,
    name: string,
    icon: string
}

const MyPage = () => {
    const state: any = useSelector(state => state)
    const history = useHistory()
    const dispatch = useDispatch()
    const [id, setId] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState<File>()
    const [category, setCategory] = useState<Array<string>>([])
    const [pref, setPref] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [profile, setProfile] = useState<string>('')

    const fetchS3Objects2 = async (bucket:string) => {
        // try {
            // const s3client = new S3Client({
            //     region: awsconfig.aws_user_files_s3_bucket_region,
            //     credentials: await Auth.currentCredentials()
            // })
            // const output = await s3client.send(
            //     new ListObjectsV2Command({
            //         Bucket: bucket
            //     })
            // )
            // console.log(output)
            // if (!output.Contents) return []
            //
            // const heads = []
            // for (let i =0; i < output.Contents.length; i++) {
            //     const c = output.Contents[i]
            //     const head:any = await s3client.send(
            //         new HeadObjectCommand({
            //             Bucket: bucket,
            //             Key: c.Key
            //         })
            //     )
            //     heads.push({ foo: decodeURIComponent(head.Metadata.foo) })
            // }
            // return heads
        // } catch (err) {
        //     console.error(err)
        // }
    }


    useEffect(() => {
        // ログイン情報がなければログアウト
        if (isEmpty(state.signInUser)) {
            handleLogout()
        }

        // ページトップへ遷移しておく
        window.scrollTo(0, 0)

        // アイコン画像読み込み
        fetchS3Objects2("ああああ.jpeg")
        // img.then((data:any) => {
        //     console.log(data[0])
        //     setImage(data[0])
        // }).catch((err) => {
        //     console.log(err)
        // })

        // マイページに入ったら再度APIコール
        const res = fetchUser(state.signInUser.id)
        res.then((data: any) => {
            dispatch(signInUserSet(data.data.getUser))
            const user = data.data.getUser
            console.log(user)
            setCategory(user.category !== null ? user.category.split(',') : [])
            setPref(user.pref)
            setName(user.sei)
            setProfile(user.profile)
            setId(user.id)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    /**
     * ユーザ削除関数
     */
    const handleLogout = () => {
        dispatch(addUserRemove())
        dispatch(signInUserRemove())
        Auth.signOut()
        history.push("/")
    }

    /**
     * 編集モード切り替え関数
     * @param {boolean} edit 編集ステータス
     */
    const handleEdit = (edit: boolean) => {
        setIsEdit(!edit)
    }

    /**
     * 画像変更関数
     * @param {ChangeEvent<HTMLInputElement>} e 画像オブジェクト
     */
    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            const img: File = e.target.files[0]
            setImage(img)
        }
    }

    const handleSave = async () => {
        console.log("upload...")
        // 画像アップロード処理
        if (image !== undefined) {
            Storage.put(image.name, image, {
                level: 'public',
                contentType: image.type
            }).then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            });
        }

        // 更新用データの作成
        const payload = {
            id: id,
            sei: name,
            profile: profile,
            pref: pref,
            category: category.toString()
        }

        // データ更新
        const res = upUser(payload)
        res.then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })

    }

    /**
     * カテゴリキーを元に変換する関数
     * @params {string} key カテゴリキー
     * @params {type} type name or icon
     * @return {string} 名前 or アイコン名
     */
    const categoryReplace = (key: string, type: string) => {
        const tmp: category[] = categoryData.filter(val => {
            if (val.key === key) {
                return val
            }
        })

        if (type === "name") {
            return tmp[0].name
        } else if (type === "icon") {
            return tmp[0].icon
        } else {
            return ""
        }
    }

    /**
     * カテゴリ変更関数
     * @param {ChangeEvent<HTMLInputElement>} e チェンジイベント
     */
    const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
        const tmp = category
        if (tmp.indexOf(e.target.value) !== -1) {
            const index = tmp.indexOf(e.target.value)
            tmp.splice(index, 1)
        } else {
            tmp.push(e.target.value)
        }
        setCategory([...tmp])
    }

    /**
     * カテゴリを減らす関数
     * @param {string} key カテゴリキー
     */
    const handleCategoryMinus = (key: string) => {
        const tmp = category
        if (tmp.indexOf(key) !== -1) {
            const index = tmp.indexOf(key)
            tmp.splice(index, 1)
        }
        setCategory([...tmp])
    }

    /**
     * 都道府県変更用関数
     * @param {ChangeEvent<HTMLSelectElement>} e 都道府県の名前
     */
    const handleChangePref = (e: ChangeEvent<HTMLSelectElement>) => {
        setPref(e.target.value)
    }

    /**
     * 名前変更用関数
     * @param {ChangeEvent<HTMLInputElement>} e 名前
     */
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    /**
     * プロフィール変更用関数
     * @param {ChangeEvent<HTMLInputElement>} e プロフィール
     */
    const handleChangeProfile = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setProfile(e.target.value)
    }

    // const imgPath = `https://eventappb633564a57ed4160b1452ab4919b316a14441-dev.s3.ap-northeast-1.amazonaws.com/public/%E3%81%82%E3%81%82%E3%81%82%E3%81%82.jpeg`

    return (
        <div className="App">
            <Header/>
            <div id="mypage" className="wrap">
                {/*<Image path={guest_icon}/>*/}
                {/*<img src={`data:image/jpeg;base64,${image}`} style={{ width: '300px' }}/>*/}
                {/*<img src={imgPath} />*/}
                {
                    isEdit &&
                    <input
                        className="change-image"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleImageChange(e)}
                    />
                }
                <div className="d-flex text-end user-area mb-1">
                    {
                        isEdit ?
                            <input type="text" defaultValue={name} onChange={(e) => handleChangeName(e)}/>
                            :
                            <h2>{name}</h2>
                    }
                    {
                        isEdit ?
                            <select value={pref} className="w-25" name="pref" id="pref"
                                    onChange={(event) => handleChangePref(event)}>
                                <option value="0">都道府県を選択してください</option>
                                {
                                    prefList.pref.map(val => {
                                        return <option key={val.code} value={val.name}>{val.name}</option>
                                    })
                                }
                            </select>
                            :
                            <p><i className="fa-solid fa-map-pin mr-px-4"></i>{pref}</p>
                    }
                </div>

                <button className={isEdit ? "button-active" : "button"} onClick={() => handleEdit(isEdit)}>
                    {
                        isEdit ?
                            <span>保存<i className="fa-solid fa-pen ml-px-5" onClick={() => handleSave()}></i></span>
                            :
                            <span>編集<i className="fa-solid fa-pen ml-px-5"></i></span>
                    }
                </button>

                <section id="profile">
                    <div className="dashed-line">
                        {
                            isEdit ?
                                <textarea defaultValue={profile} onChange={(e) => handleChangeProfile(e)} name="profile"
                                          id="profile-text-area"></textarea>
                                :
                                <p className="mt-2">{profile}</p>
                        }
                    </div>
                </section>

                <section id="interest" className="mt-2">
                    <h3>興味のあるカテゴリ</h3>
                    <div className="interest-area">
                        { //カテゴリ一覧
                            Array.isArray(category) && category.length > 0 &&
                            category.map((v: string) => {
                                return (
                                    <dl key={v}>
                                        <dt><i className={categoryReplace(v, "icon")}></i></dt>
                                        <dd>{categoryReplace(v, "name")}</dd>
                                        {
                                            isEdit &&
                                            <dd className="minus" onClick={() => handleCategoryMinus(v)}>-</dd>
                                        }
                                    </dl>
                                )
                            })
                        }
                        { //カテゴリ増やすボタン
                            isEdit && category.length < 10 &&
                            <a href="#modal" className="plus-modal border-none modal-button">
                                <span className="plus">＋</span>
                            </a>
                        }
                        {/*　モーダルウィンドウ　*/}
                        <>
                            <div className="modal-wrapper" id="modal">
                                <a href="#!" className="modal-overlay"></a>
                                <div className="modal-window">
                                    <div className="modal-content">
                                        <p className="modal_title">カテゴリ編集</p>
                                        {
                                            categoryData.map((val: category) => {
                                                return (
                                                    <div key={val.key}>
                                                        <label htmlFor="category" className="category-line">
                                                            <input onChange={(e) => handleChangeCategory(e)}
                                                                   type="checkbox" defaultValue={val.key}
                                                                   checked={category.indexOf(val.key) !== -1}/>
                                                            <span className="ml-px-5 category-label">{val.name}</span>
                                                        </label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <a href="#!" className="modal-close"><i className="far fa-times-circle"></i></a>
                                </div>
                            </div>
                        </>
                    </div>
                </section>

                <section id="event" className="mt-2">
                    <h3>直近のイベント</h3>
                    <ul className="event-area">
                        <li>
                            <p className="max">受付終了</p>
                            <p className="day">2022年12月01日</p>
                            <dl>
                                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: 2/8人</dd>
                                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
                            </dl>
                        </li>
                        <li>
                            <p className="day">2022年11月15日</p>
                            <dl>
                                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: 2/8人</dd>
                                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
                            </dl>
                        </li>
                        <li>
                            <p className="limit"><span>満員</span><span>御礼</span></p>
                            <p className="day">2022年11月11日</p>
                            <dl>
                                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: <span
                                    className="limit-text">8/8人</span></dd>
                                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
                            </dl>
                        </li>
                        <li>
                            <p className="little"><span>残り</span><span>僅か</span></p>
                            <p className="day">2022年11月7日</p>
                            <dl>
                                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: <span
                                    className="little-text">6/8人</span></dd>
                                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
                            </dl>
                        </li>
                    </ul>
                </section>


                <p>↓ログアウトボタン仮置き</p>
                <button className="logout-button" onClick={() => handleLogout()}>ログアウト</button>


            </div>

            <Footer/>
        </div>
    );
}

export default MyPage;
