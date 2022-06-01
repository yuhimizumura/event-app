import React from 'react';
import Header from "../../component/header/Header";
import QrHome from "../../component/qrreader/qrCodeApp";
import {AmplifySignOut} from "@aws-amplify/ui-react";
import {useSelector} from "react-redux";

const MyPage = () => {

    const state = useSelector(state => state)
    console.log(state)
    console.log(localStorage.getItem("status"))

    return (
        <div className="App">
            {/*<QrHome />*/}
            <h2>ここはマイページです</h2>
            <AmplifySignOut />
        </div>
    );
}

export default MyPage;
