import React, {useEffect} from 'react';
import Header from "../../component/header/Header";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom"
import Footer from "../../component/footer/Footer";
import {signInUserRemove} from "../../redux/actions/user";
import {isEmpty} from "../../util/util";
import {addUserRemove} from "../../redux/actions/add";
import QRCode from "react-qr-code";
import Image from "../../component/Image/Image";
const guest_icon = require("../../assets/img/mypage/icon_user_1.svg")
const MyPage = () => {

    const state:any = useSelector(state => state)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {

      if (isEmpty(state.signInUser)) {
        handleLogout()
      }
    },[])

    const handleLogout = () => {
      // ユーザ情報を削除
      dispatch(addUserRemove())
      dispatch(signInUserRemove())
      history.push("/")
    }

    return (
        <div className="App">
            <Header />
            <div id="mypage" className="wrap">
                <Image path={guest_icon} />
                <div className="d-flex text-end user-area mb-2">
                  <h2>{state.signInUser.sei}</h2>
                  <p><i className="fa-solid fa-map-pin mr-px-4"></i>{state.signInUser.pref}</p>
                </div>
                {/*<div className="w-25">*/}
                {/*  <AmplifyAuthenticator>*/}
                {/*    <AmplifySignOut buttonText={"ログアウト"} handleAuthStateChange={() => handleLogout()} />*/}
                {/*  </AmplifyAuthenticator>*/}
                {/*</div>*/}
                {/*<Link to="/">トップページを見る</Link>*/}
            </div>

            <Footer />
        </div>
    );
}

export default MyPage;
