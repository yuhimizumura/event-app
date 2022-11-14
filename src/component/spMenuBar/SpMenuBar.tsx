import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {isEmpty} from "../../util/util";

const SpMenuBar:React.VFC = () => {

    const state:any = useSelector(state => state)
    let link = "/login"
    let name = "ログイン"

    if (state.signInUser.id !== undefined && state.signInUser.id !== "") {
        link = "mypage"
        name = "マイページ"
    }

    if (state.addUser.id !== undefined && state.addUser.id !== "" && isEmpty(state.signInUser)) {
        name = "仮マイページ"
    } else if (state.signInUser.id !== undefined && state.signInUser.id !== "") {
        link = "mypage"
        name = "マイページ"
    }

    return (
        <div id="spMenuBar" className="dispSp">
            <ul className="wrap">
               <li>
                   <i className="fa-solid fa-bars"></i>
                   <span>メニュー</span>
               </li>
               <li>
                   <i className="fa-solid fa-house"></i>
                   <Link  to={"/"}>
                    <span>ホーム</span>
                   </Link>
               </li>
               <li>
                   <i className="fa-solid fa-plus"></i>
                   <Link  to={"/create-event"}>
                    <span>作成</span>
                   </Link>
               </li>
               <li>
                   <i className="fa-brands fa-searchengin"></i>
                   <Link  to={"/create-search"}>
                    <span>検索</span>
                   </Link>
               </li>
               <li>
                   <i className="fa-solid fa-user"></i>
                   <Link  to={link}>
                    <span>{name}</span>
                   </Link>
               </li>
            </ul>
        </div>
    );
};

export default SpMenuBar