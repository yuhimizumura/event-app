import React, {ChangeEvent, useEffect, useState} from 'react';
import Header from "../../component/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom"
import Footer from "../../component/footer/Footer";
import signInUserSet, {signInUserRemove} from "../../redux/actions/user";
import {isEmpty} from "../../util/util";
import addUserSet, {addUserRemove} from "../../redux/actions/add";
import Image from "../../component/Image/Image";
import {fetchUser} from "../../services/user";
import Amplify, {Storage,Auth} from "aws-amplify";
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
const MyPage = () => {

  const state: any = useSelector(state => state)
  const history = useHistory()
  const dispatch = useDispatch()
  const [user, setUser] = useState(state.signInUser)
  const [isEdit,setIsEdit] = useState(false)
  const [image, setImage] = useState<File>()

  const fetchS3Objects = async (bucket:any) => {
    const currentCredentials = await Auth.currentCredentials()
    const identityId = currentCredentials.identityId
    Storage.list('private/', {
      level: 'private',
      identityId: identityId // the identityId of that user
    })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    if (isEmpty(state.signInUser)) {
      handleLogout()
    }

    const r = fetchS3Objects(awsconfig.aws_user_files_s3_bucket)
    r.then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })

    // マイページに入ったら再度APIコール
    const res = fetchUser(state.signInUser.id)
    res.then((data: any) => {
      dispatch(signInUserSet(data.data.getUser))
      setUser(data.data.getUser)
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  const handleLogout = () => {
    // ユーザ情報を削除
    dispatch(addUserRemove())
    dispatch(signInUserRemove())
    Auth.signOut()
    history.push("/")
  }

  const handleEdit = (edit:boolean) => {
      setIsEdit(!edit)
  }

  const handleImageChange = async (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const img: File = e.target.files[0]
        setImage(img)
    }
  }

  const handleSave = async () => {

    if (image === undefined) return
    //

    // const currentCredentials = await Auth.currentCredentials()
    // const identityId = currentCredentials.identityId

    // Storage.configure({
    //   region: awsconfig.aws_user_files_s3_bucket_region,
    //   bucket: awsconfig.aws_user_files_s3_bucket,
    //   identityPoolId: awsconfig.aws_cognito_identity_pool_id,
    //   level: "private",
    // });

    console.log("upload...")

    Storage.put(image.name, image,{
      level: 'private',
      contentType: image.type
    })
      .then (result => {
        console.log(result)
      }).catch(err => {
        console.log(err)
    });
  }

  return (
    <div className="App">
      <Header/>
      <div id="mypage" className="wrap">
        <Image path={guest_icon}/>
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
              <input type="text" defaultValue={user.sei}/>
              :
              <h2>{user.sei}</h2>
          }
          <p><i className="fa-solid fa-map-pin mr-px-4"></i>{user.pref}</p>
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
              <textarea defaultValue={user.profile} name="profile" id="profile-text-area"></textarea>
              :
              <p className="mt-2">{user.profile}</p>
            }
          </div>
        </section>

        <section id="interest" className="mt-2">
          <h3>興味のあるカテゴリ</h3>
          <div className="interest-area">
            <dl>
              <dt>🏍</dt>
              <dd>バイク</dd>
              {
                isEdit &&
                  <dd className="minus">-</dd>
              }
            </dl>
            <dl>
              <dt>📷</dt>
              <dd>カメラ</dd>
              {
                isEdit &&
                <dd className="minus">-</dd>
              }
            </dl>
            <dl>
              <dt>🎮</dt>
              <dd>ゲーム</dd>
              {
                isEdit &&
                <dd className="minus">-</dd>
              }
            </dl>
            <dl>
              <dt>🎵</dt>
              <dd>音楽</dd>
              {
                isEdit &&
                <dd className="minus">-</dd>
              }
            </dl>
            <dl>
              <dt>🍜</dt>
              <dd>ラーメン</dd>
              {
                isEdit &&
                <dd className="minus">-</dd>
              }
            </dl>
            <dl>
              <dt>🏍</dt>
              <dd>バイク</dd>
              {
                isEdit &&
                <dd className="minus">-</dd>
              }
            </dl>
            <dl>
              <dt>📷</dt>
              <dd>カメラ</dd>
              {
                isEdit &&
                <dd className="minus">-</dd>
              }
            </dl>
            <dl>
              <dt>🎮</dt>
              <dd>ゲーム</dd>
              {
                isEdit &&
                <dd className="minus">-</dd>
              }
            </dl>
            <dl>
              <dt>🎵</dt>
              <dd>音楽</dd>
              {
                isEdit &&
                <dd className="minus">-</dd>
              }
            </dl>
            {
              isEdit &&
                <dl className="border-none">
                  <dt className="plus">＋</dt>
                </dl>
            }

            {/*<dl>*/}
            {/*  <dt>🍜</dt>*/}
            {/*  <dd>ラーメン</dd>*/}
            {/*  {*/}
            {/*    isEdit &&*/}
            {/*    <dd className="minus">-</dd>*/}
            {/*  }*/}
            {/*</dl>*/}
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
                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: <span className="limit-text">8/8人</span></dd>
                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
              </dl>
            </li>
            <li>
              <p className="little"><span>残り</span><span>僅か</span></p>
              <p className="day">2022年11月7日</p>
              <dl>
                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: <span className="little-text">6/8人</span></dd>
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
