import React, {useState} from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import HamburgerMenu from "../menu";
import {useSelector} from "react-redux";
const logo = require("../../assets/img/img_logo01.png")

const Header = () => {

    const state:any = useSelector(state => state)

    // const [link,setLink] = useState<string>("/login")
    // const [linkName,setLinkName] = useState<string>("ログイン")
    let link = "/login"
    let name = "ログイン"

    if (state.signInUser.id !== undefined && state.signInUser.id !== "" || state.addUser.id !== undefined && state.addUser.id !== "") {
      // setLink("/mypage")
      // setLinkName("マイページ")
      link = "mypage"
      name = "マイページ"
    }



    return (
        <header id="header" className="pt-1 pb-1">
            <HeaderPcMenu link={link} name={name} />
            <HeaderSpMenu link={link} name={name} />
        </header>
    )
}

type Props = {
  link:string,
  name:string
}

const HeaderPcMenu = (props:Props) => {
    const {link,name} = props
    return (
        <nav className="dispPc">
            <ul className='wrapper'>
                <li>
                    <Link to="/"><Logo /></Link>
                </li>
                <li><Link to="/search">イベントを探す</Link></li>
                <li><Link to="/about">サービスについて</Link></li>
                <li><a href={link}>{name}</a></li>
            </ul>
        </nav>
    )
}

const HeaderSpMenu = (props:Props) => {
    const {link,name} = props
    return (
        <nav className="dispSp">
            <HamburgerMenu/>
            <div className="sp-header">
                <Link to="/"><Logo /></Link>
                <div className="icons">
                    <Link to="/search">
                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                    </Link>
                    <a href={link}>
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
