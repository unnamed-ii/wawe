import React from 'react';
import './footer.scss';
import Container from "../Container/container";
import {ReactComponent as Logo} from "../../images/icons/logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <a href="#main"><Logo/></a>
            </Container>
        </footer>
    );
};

export default Footer;