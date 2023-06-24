import React from "react";
import './main.scss';
import Container from "../../components/Container/container";
import {ReactComponent as ScrollButton} from "../../images/icons/scroll-button.svg";

const Main = ({isSecond}) => {

    return (
        <section className="main" id={isSecond ? 'second-main' : ''}>
            <Container>
                <div className="main__inner">
                    <div className="main__inner-title">WAWE</div>
                    <div className="main__inner-subtitle">Школа серфинга на канарских Островах</div>
                    <a href="#about-block" className="main__inner-link"><ScrollButton /></a>
                </div>
            </Container>
        </section>
    );
}

export default Main;