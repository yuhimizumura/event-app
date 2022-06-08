import React from "react";
import {Link} from "react-router-dom";
import { slide as Menu } from "react-burger-menu"

const HamburgerMenu = (props) => {
    return (
        <Menu {...props}>
            <Link to="/page-2" className="menu-item" >
                page1
            </Link>
            <Link to="/page-3" className="menu-item" >
                page2
            </Link>
            <Link to="/page-4" className="menu-item" >
                page3
            </Link>
            <Link to="/page-2" className="menu-item" >
                page4
            </Link>
            <Link to="/page-3" className="menu-item" >
                page5
            </Link>
            <Link to="/page-4" className="menu-item" >
                page6
            </Link>
        </Menu>
    );
};

export default HamburgerMenu;