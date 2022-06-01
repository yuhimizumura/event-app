import React from 'react';
import Header from "../../component/header/Header";
import QrHome from "../../component/qrreader/qrCodeApp";
import {AmplifyAuthenticator,AmplifySignOut} from "@aws-amplify/ui-react";
import {useSelector} from "react-redux";
import {Redirect,useLocation} from "react-router-dom"

const MyPage = () => {

    let location = useLocation();
    const state = useSelector(state => state)
    console.log(location)
    let   from   = location.state || { from: { pathname: "/mypage" } };

    console.log(from)

    const removeToken = () => {
        // window.location.href = "/"
    }

    return (
        <div className="App">
            {/*<QrHome />*/}
            <h2>ここはマイページです</h2>

           <AmplifyAuthenticator>
               <AmplifySignOut onClick={() => removeToken()} />
           </AmplifyAuthenticator>
        </div>
    );
}

export default MyPage;
