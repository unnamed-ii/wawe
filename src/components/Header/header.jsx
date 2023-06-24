import React from "react";
import './header.scss';
import Container from "../Container/container";

const Header = () => {

    return (
        <Container>
            <header className="header">
                <img className="header__logo" src="#"/>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Prices</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </header>
        </Container>
    );
}

export default Header;