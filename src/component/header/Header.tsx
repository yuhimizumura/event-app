import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
const logo = require("../../assets/img/img_logo.png")

const Header = () => {
    return (
        <header id="header" className="pt-1 pb-1">
            <HeaderMenu />
        </header>
    )
}

const HeaderMenu = () => {
    return (
        <nav>
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

const Logo = () => {
    return (
        <h1 className="w-px-100 h-px-60">
            <Image size="w-100 h-px-60" path={logo} alt="ロゴ画像" />
        </h1>
    )
}

export default Header;
