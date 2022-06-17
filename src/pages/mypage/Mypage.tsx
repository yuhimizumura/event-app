import React, {useEffect} from 'react';
import Header from "../../component/header/Header";
import QrHome from "../../component/qrreader/qrCodeApp";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {useSelector} from "react-redux";
import {Redirect, useLocation} from "react-router-dom"
import {Amplify,Auth} from "aws-amplify";
import awsmobile from "../../aws-exports";
import {Link} from "react-router-dom"
import {getAccessToken, getIdToken, getRefreshToken} from "../../util/util";
import {fetchUser} from "../../services/user";

const MyPage = () => {

    let location = useLocation();
    const state:any = useSelector(state => state)


    const logout = () => {
        localStorage.clear()
        window.location.href = "/login"
    }

    const removeToken = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    return (
        <div className="App">
            {/*<QrHome />*/}
            <Header />
            <h2 className="mt-5">ようこそ！{state.signInUser.sei}{state.signInUser.mei}さん</h2>

            <AmplifyAuthenticator>
                <AmplifySignOut onClick={() => removeToken()}/>
            </AmplifyAuthenticator>

            <Link to="/">トップページを見る</Link>
        </div>
    );
}

export default MyPage;
