import React from "react";
import {Link} from "react-router-dom";
import { slide as Menu } from "react-burger-menu"

const HamburgerMenu = (props) => {
    return (
        <Menu {...props}>
            <Link to="/page-2" className="menu-item" >
                <i className="fa-solid fa-housem mr-px-5"></i>ホーム
            </Link>
            <Link to="/page-3" className="menu-item" >
                <i className="fa-solid fa-map-location-dot mr-px-5"></i>地域で探す
            </Link>
            <Link to="/page-4" className="menu-item" >
                <i className="fa-solid fa-star mr-px-5"></i>趣味で探す
            </Link>
            <Link to="/page-2" className="menu-item" >
                <i className="fa-solid fa-layer-group mr-px-5"></i>年代で探す
            </Link>
            <Link to="/page-3" className="menu-item" >
                <i className="fa-solid fa-keyboard mr-px-5"></i>キーワードで探す
            </Link>
            <Link to="/page-4" className="menu-item" >
                <i className="fa-solid fa-circle-info mr-px-5"></i>公式イベントで探す
            </Link>
        </Menu>
    );
};

export default HamburgerMenu;