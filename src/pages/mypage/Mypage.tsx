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
            <div className="wrap">
                <h2 className="mt-5 mb-3">ようこそ！{state.signInUser.sei}さん</h2>
                <div className="w-25">
                  <div className="mb-3">
                    <QRCode value={"https://google.com"} />
                  </div>
                  <AmplifyAuthenticator>
                    <AmplifySignOut buttonText={"ログアウト"} handleAuthStateChange={() => handleLogout()} />
                  </AmplifyAuthenticator>
                </div>
                <Link to="/">トップページを見る</Link>
            </div>

            <Footer />
        </div>
    );
}

export default MyPage;
