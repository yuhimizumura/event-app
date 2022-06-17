import React, {useEffect, useState} from 'react';
import Header from "../../component/header/Header";
import QrHome from "../../component/qrreader/qrCodeApp";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {useSelector} from "react-redux";
import {Redirect, useLocation} from "react-router-dom"
import {Amplify,Auth} from "aws-amplify";
import awsmobile from "../../aws-exports";
import {Link} from "react-router-dom"
import {
    getAccessToken,
    getIdToken,
    getRefreshToken,
    getUserEmail,
    getUserId,
    getUserInfo,
    prefList
} from "../../util/util";
import {fetchUser} from "../../services/user";

const AddUser = () => {

    const [id,setId] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [tel,setTel] = useState<string>("")

    getUserInfo("id").then(data => {
        setId(data)
    }).catch(error => {
        console.log(error)
    })

    getUserInfo("email").then(data => {
        setEmail(data)
    }).catch(error => {
        console.log(error)
    })

    getUserInfo("tel").then((data:string)=> {
        if (data == "") {
            throw new Error("Undefined phone number")
        }
        const trim = data.substr(3)
        console.log(trim)
        setTel(trim)
    }).catch(error => {
        console.log(error)
    })

    const splitPhoneNumber = (key:number) => {
        if (tel === "") return ""
        switch (key) {
            case 1:
                return tel.substr(0,3)
            case 2:
                return tel.substr(3,4)
            case 3:
                return tel.substr(7,4)
        }
    }

    const handleSubmit = () => {

    }

    const inputText = (e,type) => {

    }

    return (
        <div className="App">
            {/*<QrHome />*/}
            <Header />

            <form id="add-user-area" action="/confirm">
                <input type="hidden" name="id" defaultValue={id}/>
                <div className="d-flex">
                    <div>
                        <label htmlFor="sei">お名前（性） <span>*</span></label>
                        <input id="sei" type="text" name="sei" onChange={(e) => {inputText(e,"sei")}}/>
                    </div>
                    <div>
                        <label htmlFor="mei">お名前（名） <span>*</span></label>
                        <input id="mei" type="text" name="mei" />
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <label htmlFor="sei_kana">お名前（セイ） <span>*</span></label>
                        <input id="sei_kana" type="text" name="sei_kana" />
                    </div>
                    <div>
                        <label htmlFor="mei_kana">お名前（メイ） <span>*</span></label>
                        <input id="mei_kana" type="text" name="mei_kana" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Email<span>*</span></label>
                    <input id="email" type="email" name="email" defaultValue={email} disabled={true}  />
                </div>
                <div className="d-flex">
                    <label htmlFor="tel1">電話番号 <span>*</span></label>
                    <input id="tel1" type="tel" name="tel1" defaultValue={splitPhoneNumber(1)} disabled={true} />
                    <span>-</span>
                    <input id="tel2" type="tel" name="tel2" defaultValue={splitPhoneNumber(2)} disabled={true}/>
                    <span>-</span>
                    <input id="tel3" type="tel" name="tel3" defaultValue={splitPhoneNumber(3)} disabled={true}/>
                </div>
                <div className="d-flex">
                    <label htmlFor="other_tel1">その他電話番号 <span>*</span></label>
                    <input id="other_tel1" type="tel" name="other_tel1" />
                    <span>-</span>
                    <input id="other_tel2" type="tel" name="other_tel2"/>
                    <span>-</span>
                    <input id="other_tel3" type="tel" name="other_tel3"/>
                </div>
                <div>
                    <label htmlFor="post1">郵便番号 <span>*</span></label>
                    <input id="post1" type="tel" name="post1" />
                    <span>-</span>
                    <input id="post2" type="tel" name="post2" />
                </div>
                <div>
                    <label htmlFor="pref">都道府県 <span>*</span></label>
                    <select name="pref" id="pref">
                        <option defaultValue="0">都道府県を選択してください</option>
                        {
                            prefList.pref.map(val => {
                                return <option key={val.code} defaultValue={val.code}>{val.name}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="address">市区町村 <span>*</span></label>
                    <input id="address" type="text" name="address" />
                </div>
                <div>
                    <label htmlFor="other_address">以降住所<span>*</span></label>
                    <input id="other_address" type="text" name="other_address" />
                </div>

                <input type="submit" onClick={handleSubmit} defaultValue="確認画面へ"/>
            </form>
        </div>
    );
}

export default AddUser;
