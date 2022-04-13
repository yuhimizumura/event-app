import React from 'react';
import Header from "../../component/header/Header";
import QrHome from "../../component/qrreader/qrCodeApp";

const MyPage = () => {

    console.log(localStorage.getItem("status"))

    return (
        <div className="App">
            {/*<QrHome />*/}
            <h2>ここはマイページです</h2>
        </div>
    );
}

export default MyPage;
