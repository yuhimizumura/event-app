import React, {useEffect, useState} from 'react';
import Header from "../../component/header/Header";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom"
import Footer from "../../component/footer/Footer";
import signInUserSet, {signInUserRemove} from "../../redux/actions/user";
import {isEmpty} from "../../util/util";
import addUserSet, {addUserRemove} from "../../redux/actions/add";
import QRCode from "react-qr-code";
import Image from "../../component/Image/Image";
import {fetchUser} from "../../services/user";
import {Auth} from "aws-amplify";

const guest_icon = require("../../assets/img/mypage/icon_user_1.svg")
const MyPage = () => {

  const state: any = useSelector(state => state)
  const history = useHistory()
  const dispatch = useDispatch()
  const [user, setUser] = useState(state.signInUser)

  useEffect(() => {
    if (isEmpty(state.signInUser)) {
      handleLogout()
    }

    // マイページに入ったら再度APIコール
    const res = fetchUser(state.signInUser.id)
    res.then((data: any) => {
      dispatch(signInUserSet(data.data.getUser))
      setUser(data.data.getUser)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  // useEffect(() => {
  //   console.log(state.signInUser)
  // },[state.signInUser])


  const handleLogout = () => {
    // ユーザ情報を削除
    dispatch(addUserRemove())
    dispatch(signInUserRemove())
    Auth.signOut()
    history.push("/")
  }

  return (
    <div className="App">
      <Header/>
      <div id="mypage" className="wrap">
        <Image path={guest_icon}/>
        <div className="d-flex text-end user-area mb-2">
          <h2>{user.sei}</h2>
          <p><i className="fa-solid fa-map-pin mr-px-4"></i>{user.pref}</p>
        </div>

        <section id="profile">
          <div className="dashed-line">
            <p className="mt-2">{user.profile}</p>
          </div>
        </section>

        <section id="interest" className="mt-2">
          <h3>興味のあるカテゴリ</h3>
          <div className="interest-area">
            <dl>
              <dt>🏍</dt>
              <dd>バイク</dd>
            </dl>
            <dl>
              <dt>📷</dt>
              <dd>カメラ</dd>
            </dl>
            <dl>
              <dt>🎮</dt>
              <dd>ゲーム</dd>
            </dl>
            <dl>
              <dt>🎵</dt>
              <dd>音楽</dd>
            </dl>
            <dl>
              <dt>🍜</dt>
              <dd>ラーメン</dd>
            </dl>
            <dl>
              <dt>🏍</dt>
              <dd>バイク</dd>
            </dl>
            <dl>
              <dt>📷</dt>
              <dd>カメラ</dd>
            </dl>
            <dl>
              <dt>🎮</dt>
              <dd>ゲーム</dd>
            </dl>
            <dl>
              <dt>🎵</dt>
              <dd>音楽</dd>
            </dl>
            <dl>
              <dt>🍜</dt>
              <dd>ラーメン</dd>
            </dl>
          </div>
        </section>

        <section id="event" className="mt-2">
          <h3>直近のイベント</h3>
          <ul className="event-area">
            <li>
              <p className="max">受付終了</p>
              <p className="day">2021年12月01日</p>
              <dl>
                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: 2/8人</dd>
                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
              </dl>
            </li>
            <li>
              <p className="day">2021年12月01日</p>
              <dl>
                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: 2/8人</dd>
                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
              </dl>
            </li>
            <li>
              <p className="limit"><span>満員</span><span>御礼</span></p>
              <p className="day">2021年12月01日</p>
              <dl>
                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: <span className="limit-text">8/8人</span></dd>
                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
              </dl>
            </li>
            <li>
              <p className="little"><span>残り</span><span>僅か</span></p>
              <p className="day">2021年12月01日</p>
              <dl>
                <dt><i className="fa-solid fa-flag mr-px-5"></i>バイク好き集まれ！SSツーリング！</dt>
                <dd><i className="fa-solid fa-users mr-px-5"></i>募集人数: <span className="little-text">6/8人</span></dd>
                <dd><i className="fa-sharp fa-solid fa-map-pin mr-px-5"></i>開催地: 大阪府大阪市内</dd>
                <dd><i className="fa-solid fa-check mr-px-5"></i>参加条件: 18際以上</dd>
              </dl>
            </li>
          </ul>
        </section>


        <button className="logout-button" onClick={() => handleLogout()}>ログアウト</button>


      </div>

      <Footer/>
    </div>
  );
}

export default MyPage;
