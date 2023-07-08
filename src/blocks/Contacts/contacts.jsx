import React, {useState} from 'react';
import './contacts.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {ContactsInfoData, ContactsSocialData} from "../../constants";

const MessageSentPopUp = ({isLoading, closePopUp}) => {
    return (
        <div className="pop-up">
            <div className="pop-up__inner">
                {isLoading && <h1 className="pop-up__inner-loading">Loading ...</h1>}
                {!isLoading &&
                <div className="pop-up__inner-sent">
                    <h1>Message sent successfully</h1>
                    <h4>We will contact you as soon as possible</h4>
                    <button onClick={closePopUp}>X</button>
                </div>
                }
            </div>
        </div>
    )
};

const Contacts = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [isPopUpOpened, setIsPopUpOpened] = useState(false)

    const onNameChange = (e) => setName(e.target.value)
    const onPhoneChange = (e) => setPhone(e.target.value)
    const onMessageChange = (e) => setMessage(e.target.value)

    const closePopUp = () => setIsPopUpOpened(false)

    const sendMessage = async (e) => {
        e.preventDefault();

        await setIsLoading(true);
        await setTimeout(() => {
            setIsLoading(false)
        }, 1500);
        await setIsPopUpOpened(true)

        setName('');
        setPhone('');
        setMessage('');
    };

    return (
        <>
            {isPopUpOpened &&
            <MessageSentPopUp
                isLoading={isLoading}
                closePopUp={closePopUp}
            />
            }
            <section className="contacts" id="contacts">
                <Container>
                    <div className="contacts__inner">
                        <Title
                            title={"ОСТАВИТЬ ЗАЯВКУ"}
                        />
                        <div className="contacts__inner-block">
                            <form onSubmit={(e) => sendMessage(e)} className="contacts__inner-block__form">
                                <input type="text"
                                       placeholder="Name"
                                       value={name}
                                       onChange={(e) => onNameChange(e)}
                                />
                                <input type="text"
                                       placeholder="Phone number"
                                       value={phone}
                                       onChange={(e) => onPhoneChange(e)}
                                />
                                <textarea cols="30"
                                          rows="10"
                                          placeholder="You can leave your message and we will contact you as soon as possible"
                                          value={message}
                                          onChange={(e) => onMessageChange(e)}
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
        </>
    );
};

export default Contacts;