import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import HamburgerMenu from "../menu";
import {useSelector} from "react-redux";
const logo = require("../../assets/img/img_logo01.png")

const Header = () => {

    const state:any = useSelector(state => state)
    console.log(state.authStatus.nextAuthState)

    return (
        <header id="header" className="pt-1 pb-1">
            <HeaderPcMenu />
            <HeaderSpMenu />
        </header>
    )
}

const HeaderPcMenu = () => {
    return (
        <nav className="dispPc">
            <ul className='wrapper'>
                <li>
                    <Link to="/"><Logo /></Link>
                </li>
                <li><Link to="/search">イベントを探す</Link></li>
                <li><Link to="/about">当サービスについて</Link></li>
                <li><a href="/login">ログイン</a></li>
            </ul>
        </nav>
    )
}

const HeaderSpMenu = () => {
    return (
        <nav className="dispSp">
            <HamburgerMenu/>
            <div className="sp-header">
                <Link to="/"><Logo /></Link>
                <div className="icons">
                    <Link to="/search">
                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                    </Link>
                    <a href="/login">
                        <i className="fa-solid fa-user fa-lg"></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}

const Logo = () => {
    return (
        <>
            <h1>
                <Image size="logo" path={logo} alt="ロゴ画像" />
                <span className="dispPc">個人向けイベント開催サービス いべこね！</span>
                <span className="dispSp">いべこね！</span>
            </h1>
        </>
    )
}

export default Header;
