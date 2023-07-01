import React from 'react';
import './services.scss';
import Container from "../../components/Container/container";

const ServicesData = [
    {
        title: 'Normal',
        text: [
            'Проживание на вилле 6 ночей',
            'Номер категории стандарт',
            'Экипировка для обучения',
            'Обучение серфингу 5 тренировок по 2 часа',
            'Страховка',
            'Вечеринка с угощениями и дискотекой',
        ],
        price: '450'
    },
    {
        title: 'All inclusive',
        text: [
            'Проживание на вилле 6 ночей',
            'Номер категории люкс',
            'Экипировка для обучения',
            'Обучение серфингу 8 тренировок по 2 часа',
            'Страховка',
            'Вечеринка с угощениями и дискотекой',
            'Авиа перелет Тенерифе -Лансароте - Тенерифе',
            'Завтраки на вилле',
        ],
        price: '950'
    },
    {
        title: 'Professional',
        text: [
            'Проживание на вилле 8 ночей',
            'Номер категории люкс',
            'Экипировка для обучения',
            'Обучение серфингу 16 тренировок по 2 часа',
            'Страховка',
            'Вечеринка с угощениями и дискотекой',
            'Авиа перелет Тенерифе -Лансароте - Тенерифе',
            'Завтраки и ужины на вилле',
        ],
        price: '1450'
    }
]

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
                    <div className="services__inner-title">
                        ПАКЕТЫ УСЛУГ
                        <span>/</span>
                    </div>
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