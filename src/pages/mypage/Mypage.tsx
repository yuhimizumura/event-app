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
import QRCode from "qrcode.react"

import { S3Client, HeadObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import {fetchEvent, fetchEventByEventId, fetchEventMaster, getEventListMasters} from "../../services/event/fetchEvent";
import {addEvent} from "../../services/event/createEvent";
import QrHome from "../../component/qrreader/qrCodeApp";

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
    const [imageName,setImageName] = useState<string>('')
    const [eventIdList,setEventIdList] = useState<string[]>([])
    const [eventList,setEventList] = useState<any>([])
    const [reEventLists,setReEventLists] = useState([])
    const [dataNull,setDataNull] = useState(0)
    const [isQr,setIsQr] = useState(false)

    useEffect(() => {
        let isMounted = true;
        // ログイン情報がなければログアウト
        if (isEmpty(state.signInUser)) {
            handleLogout()
        }

        // ページトップへ遷移しておく
        window.scrollTo(0, 0)

        // マイページに入ったら再度APIコール
        fetchUser(state.signInUser.id).then((data: any) => {
            updateUsers(data.data.getUser)
        }).catch((error) => {
            console.log(error)
        })

        fetchEvent(state.signInUser.id).then((data: any) => {
            setEventIdList(data.data.eventByUserId?.items)
        }).catch((error) => {
            console.log(error)
        })

        getEventListMasters().then((data: any) => {
            const tmp = data.data.listEventMasters?.items
            tmp.map(async (val:any,key:number) => {
                await getEventEntryCount(val.id).then((count) => {
                    tmp[key]["count"] = count
                })
                return val
            })
            setReEventLists(tmp)
        }).catch((error) => {
            console.log(error)
        })

        return () => {
            console.log("...unmounted")
            isMounted = false;
        };
    }, [])

    useEffect(() => {
        // window.location.reload()
    },[imageName])

    useEffect(() => {
        if (isEmpty(eventIdList)) return

        let res:any = []
        const tmp = eventIdList
        tmp.map(async (val:any,key) => {
            return await fetchEventMaster(val.event_id).then(async(data: any) => {
                await getEventEntryCount(val.event_id).then((count) => {
                    data.data.getEventMaster["count"] = count
                })
                //日付フォーマット
                let date = data.data.getEventMaster.dateTime
                const dateTmp = new Date(date)
                data.data.getEventMaster.dateTime = `${dateTmp.getFullYear()}年${dateTmp.getMonth() + 1}月${dateTmp.getDate()}日 ${dayFormat(dateTmp.getDay())}`
                await res.push(data.data.getEventMaster)
                if (tmp.length === res.length) {
                    res.sort((a:any, b:any) => {
                        return a.updatedAt > b.updatedAt ? -1 : 1;
                    });
                    await setEventList([...res])
                }
            }).catch((error) => {
                console.log(error)
            })
        })

    },[eventIdList])

    const dayFormat = (num:number) => {
        const data:any = {
            0 : "(日)",
            1 : "(月)",
            2 : "(火)",
            3 : "(水)",
            4 : "(木)",
            5 : "(金)",
            6 : "(土)",
        }

        return data[num]
    }

    const getEventEntryCount = async (id:string) => {
        let count = 0
        await fetchEventByEventId(id).then((data: any) => {
           count =  data.data.eventByEventId.items.length
        }).catch((error) => {
            console.log(error)
        })
        return await count
    }


    /**
     * ユーザState更新
     *
     */
    const updateUsers = (user:any) => {
        dispatch(signInUserSet(user))


        if (user.category !== null && user.category !== "" && user.category !== undefined) {
            setCategory(user.category.split(','))
        } else {
            setCategory([])
        }
        setPref(user.pref)
        setName(user.sei)
        setProfile(user.profile)
        setId(user.id)

        let iconName = 'icon_user_1.svg'
        if (user.image_type !== undefined && user.image_type !== "" && user.image_type !== null) {
            iconName = `${user.id}.jpeg`
        }

        // アイコン画像読み込み
        Storage.get(iconName, {
            level: 'public'
        }).then(result => {
            setImageName(result)
        }).catch(err => {
            console.log(err)
        });
    }


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
        console.log("change Image...")
        if (e.target.files !== null) {
            const img: File = e.target.files[0]
            setImage(img)
        }
    }

    const handleSave = async () => {
        console.log("upload...")

        // 画像アップロード処理
        if (image !== undefined) {
            Storage.put(`${id}.jpeg`, image, {
                level: 'public',
                contentType: 'jpeg'
            }).then(result => {
                Storage.get(result.key, {
                    level: 'public'
                }).then(result => {
                    setImageName(result)
                }).catch(err => {
                    console.log(err)
                });
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
            category: category.toString(),
            image_type: image?.type
        }

        // データ更新
        const res = upUser(payload)
        res.then((data:any) => {
            updateUsers(data.data.updateUser)
        }).catch((err) => {
            console.log(err)
        })

        setIsEdit(!isEdit)

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

        if (isEmpty(tmp)) {
            return ""
        }

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

    const handleEntry = (id:string) => {
        const eventId = new Date().getTime().toString()  + Math.floor(Math.random() * 10).toString()
        const payload = {
            id: eventId,
            user_id: state.signInUser.id,
            event_id:id
        }

        addEvent(payload)

        fetchEvent(state.signInUser.id).then((data: any) => {
            setEventIdList(data.data.eventByUserId?.items)
        }).catch((error) => {
            console.log(error)
        })

    }

    const handleViewQRCode = (id:string,type:boolean) => {
        setIsQr(type)
    }

    // const imgPath = `https://eventappb633564a57ed4160b1452ab4919b316a14441-dev.s3.ap-northeast-1.amazonaws.com/public/%E3%81%82%E3%81%82%E3%81%82%E3%81%82.jpeg`

    return (
        <div className="App">
            <Header/>
            <div id="mypage" className="wrap">
                <img src={imageName} />
                {
                    isEdit &&
                    <input
                        className="change-image mt-1"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleImageChange(e)}
                    />
                }
                <div className={`d-flex user-area mt-1 mb-1 ${isEdit ? "align-c" : "align-bl"}`}>
                    {
                        isEdit ?
                            <input type="text" defaultValue={name} onChange={(e) => handleChangeName(e)}/>
                            :
                            <h2>{name}</h2>
                    }
                    {
                        isEdit ?
                            <select value={pref} className="w-25 pt-px-10 pb-px-10" name="pref" id="pref"
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

                <button className={isEdit ? "button-active" : "button"} onClick={() => handleSave()}>
                    {
                        isEdit ?
                            <span>保存<i className="fa-solid fa-pen ml-px-5" ></i></span>
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
                            <a href="#modal" className={`plus-modal border-none modal-button ${category.length === 5 ? "mt-1" :''}`}>
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
                                                        <label htmlFor={`category${val.key}`} className="category-line">
                                                            <input id={`category${val.key}`} onChange={(e) => handleChangeCategory(e)}
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
                    <h3>エントリーイベント</h3>
                    <ul className="event-area">
                        {
                            !isEmpty(eventList) ?
                                eventList.map((val:any) => {
                                    return (
                                        <li key={val.id}>
                                            {
                                                val.count == val.menbers ?
                                                    <p className="max">受付終了</p>
                                                    :
                                                    <p className="limit"><span>満員</span><span>御礼</span></p>
                                            }

                                            <p className="day">{val.dateTime}</p>
                                            <div>
                                                <dl>
                                                    <dt><i className="fa-solid fa-flag mr-px-5"></i>{val.name}</dt>
                                                    <dd><i
                                                        className="fa-solid fa-users mr-px-5"></i>募集人数: {val.count}/{val.members}人
                                                    </dd>
                                                    <dd><i
                                                        className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: {val.venue}
                                                    </dd>
                                                    <dd><i
                                                        className="fa-solid fa-check mr-px-5"></i>参加条件: {val.rule === null ? "なし" : val.rule}
                                                    </dd>
                                                </dl>
                                                {
                                                    isQr ?
                                                           <>
                                                               <div className="qrCode">
                                                                   <QRCode className="qrCode" value={`${state.signInUser.id}:${val.id}`} />
                                                               </div>
                                                               <button className="red-button" onClick={() => handleViewQRCode(val.id,false)}>閉じる</button>
                                                           </>
                                                        :
                                                        <button className="blue-button" onClick={() => handleViewQRCode(val.id,true)}>QRコードを表示</button>
                                                }
                                            </div>
                                        </li>
                                    )
                                })
                                :
                                <p　className="center">現在、エントリーしているイベントはありません。</p>
                        }
                    </ul>
                </section>


                <section id="event" className="mt-2">
                    <h3>おすすめイベント</h3>
                    <ul className="event-area">
                        {
                            !isEmpty(reEventLists) &&
                                reEventLists.map((val:any) => {
                                    console.log(val)
                                    const s = eventIdList.filter((v:any) => {
                                        if (v.event_id === val.id) {
                                            return val
                                        } else {
                                            setDataNull(dataNull + 1)
                                        }
                                    })

                                    if (s.length > 0) return

                                    const dateTmp = new Date(val.dateTime)
                                    const dateTime = `${dateTmp.getFullYear()}年${dateTmp.getMonth() + 1}月${dateTmp.getDate()}日 ${dayFormat(dateTmp.getDay())}`

                                    return (
                                        <li key={val.id}>
                                            {
                                                val.count == val.menbers ?
                                                    <p className="max">受付終了</p>
                                                    :
                                                    <p className="limit"><span>満員</span><span>御礼</span></p>
                                            }

                                            <p className="day">{dateTime}</p>
                                            <div>
                                                <dl>
                                                    <dt><i className="fa-solid fa-flag mr-px-5"></i>{val.name}</dt>
                                                    <dd><i
                                                        className="fa-solid fa-users mr-px-5"></i>募集人数: {val.count}/{val.members}人
                                                    </dd>
                                                    <dd><i
                                                        className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: {val.venue}
                                                    </dd>
                                                    <dd><i
                                                        className="fa-solid fa-check mr-px-5"></i>参加条件: {val.rule === null ? "なし" : val.rule}
                                                    </dd>
                                                </dl>
                                                <button className="button" onClick={() => handleEntry(val.id)}>エントリー</button>
                                            </div>
                                        </li>
                                    )
                                })
                        }
                        {
                           isEmpty(eventIdList) || dataNull === 0 &&
                            <p className="center">現在、おすすめのイベントはございません</p>
                        }


                    </ul>
                </section>

                {
                    isEdit &&
                    <button className="button-active" onClick={() => handleLogout()}>ログアウト</button>
                }


            </div>

            <Footer/>
        </div>
    );
}

export default MyPage;
