import React from 'react';
import './contacts.scss';
import Container from "../../components/Container/container";

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <Container>
                <div className="contacts__inner">
                    <div className="contacts__inner-title">
                        ОСТАВИТЬ ЗАЯВКУ
                        <span>/</span>
                    </div>
                    <div className="contacts__inner-block">
                        <form className="contacts__inner-block__form">
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Phone number"/>
                            <textarea name="" id="" cols="30" rows="10"
                                      placeholder="You can leave your message and we will contact you as soon as possible"
                            />
                            <button>ОТПРАВИТЬ</button>
                        </form>
                        <div className="contacts__inner-block__info">
                            <ul>
                                <li>
                                    Есть вопрос?
                                    Вы можете связаться с нами:
                                </li>
                                <li>
                                    WhatsApp, Viber, Telegram
                                    +3 467 486-37-88
                                </li>
                                <li>
                                    Avenida grandes playas 79,
                                    Corralejo la Oliva Fuerteventura,
                                    Spain. 35660
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="contacts__inner-social">
                        <li><a href="#">INSTAGRAM</a></li>
                        <li><a href="#">FACEBOOK</a></li>
                        <li><a href="#">YOUTUBE</a></li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Contacts;