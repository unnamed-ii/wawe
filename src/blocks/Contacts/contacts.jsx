import React from 'react';
import './contacts.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {ContactsInfoData, ContactsSocialData} from "../../constants";

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <Container>
                <div className="contacts__inner">
                    <Title
                        title={"ОСТАВИТЬ ЗАЯВКУ"}
                    />
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
                                {ContactsInfoData.map(paragraph => (
                                    <li>{paragraph}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <ul className="contacts__inner-social">
                        {ContactsSocialData.map(element => (
                            <li>
                                <a href={element.link}>
                                    {element.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Contacts;