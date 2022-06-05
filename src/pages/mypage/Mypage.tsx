import React from 'react';
import Header from "../../component/header/Header";
import QrHome from "../../component/qrreader/qrCodeApp";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {useSelector} from "react-redux";
import {Redirect, useLocation} from "react-router-dom"
import {Amplify,Auth} from "aws-amplify";
import awsmobile from "../../aws-exports";

const MyPage = () => {

    let location = useLocation();
    const state:any = useSelector(state => state)

    console.log(state.signInUser)

    const removeToken = () => {
        window.location.href = "/"
    }

    return (
        <div className="App">
            {/*<QrHome />*/}
            <h2>ようこそ！{state.signInUser.sei}{state.signInUser.mei}さん</h2>

            <AmplifyAuthenticator>
                <AmplifySignOut onClick={() => removeToken()}/>
            </AmplifyAuthenticator>
        </div>
    );
}

export default MyPage;
