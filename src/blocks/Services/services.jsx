import React from 'react';
import './services.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {ServicesData} from "../../constants";

const ServiceCard = ({title, text, price}) => {
    return (
        <div className="service__inner-list__card">
            <div className="title">
                {title}
            </div>
            <ul className="list">
                {text.map(row =>
                    <li>{row}</li>
                )}
            </ul>
            <div className="price">
                {price} <span>$</span>
            </div>
        </div>
    )
}

const Services = () => {
    return (
        <section className="services" id="prices">
            <Container>
                <div className="services__inner">
                    <Title
                        title={"ПАКЕТЫ УСЛУГ"}
                    />
                    <div className="services__inner-list">
                        {ServicesData.map(service =>
                            <ServiceCard
                                title={service.title}
                                text={service.text}
                                price={service.price}
                            />
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;