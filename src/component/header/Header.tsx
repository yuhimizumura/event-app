import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import HamburgerMenu from "../menu";
const logo = require("../../assets/img/img_logo01.png")
const twitter = require("../../assets/img/img_icon01.png")

const Header = () => {
    return (
        <header id="header" className="pt-1 pb-1">
            <HeaderPcMenu />
            <HeaderSpMenu />
        </header>
    )
}

// const handleToggle = (event:any) => {
//     console.log(event.target.value)
// }

const HeaderPcMenu = () => {
    return (
        <nav className="dispPc">
            <ul className='wrapper'>
                <li>
                    <Link to="/"><Logo /></Link>
                </li>
                <li><Link to="/search">イベントを探す</Link></li>
                <li><Link to="/about">当サービスについて</Link></li>
                <li><Link to="/login">ログイン</Link></li>
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
                <Image size="header-icon" path={logo} />
                <Image size="header-icon" path={logo} />
                <Image size="header-icon" path={logo} />
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
                {/*<span className="dispSp">いべこね！</span>*/}
            </h1>
        </>
    )
}

export default Header;
