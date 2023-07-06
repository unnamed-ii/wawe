import React, {useState} from "react";
import './header.scss';
import Container from "../Container/container";
import {ReactComponent as Logo} from '../../images/icons/logo.svg';
import {HeaderData} from "../../constants";

const Header = () => {
    const [onScroll, setOnScroll] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 100) setOnScroll(true)
        if (window.scrollY < 100) setOnScroll(false)
    }
    window.addEventListener('scroll', changeBackgroundColor)

    return (
        <Container>
            <header className={"header" + (onScroll ? " on-scroll" : "")}>
                <a href="#main"><Logo/></a>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {HeaderData.map(element => (
                            <li>
                                <a href={element.link}>
                                    {element.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </Container>
    );
}

export default Header;