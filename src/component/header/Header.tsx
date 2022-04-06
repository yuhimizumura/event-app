import React from "react";

const Header = () => {
    return (
        <header className='d-flex'>
            <Logo />
            <GMenu />
        </header>
    )
}

const Logo = () => {
    return (
        // <img src="" alt=""/>
        <h1>イベントアプリ</h1>
    )
}

const GMenu = () => {
    return (
        <ul className='d-flex'>
            <li>イベントを探す</li>
            <li>当サービスについて</li>
            <li>ログイン</li>
        </ul>
    )
}

export default Header;
