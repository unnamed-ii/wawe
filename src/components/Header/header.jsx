import React from "react";
import './header.scss';
import Container from "../Container/container";
import {ReactComponent as Logo} from '../../images/icons/logo.svg';

const Header = () => {

    return (
        <Container>
            <header className="header">
                <a href="#main"><Logo/></a>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#prices">Prices</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </nav>
            </header>
        </Container>
    );
}

export default Header;