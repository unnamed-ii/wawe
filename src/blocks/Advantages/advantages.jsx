import React from 'react';
import './advantages.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {AdvantagesInfoData, AdvantagesListData, AdvantagesStatisticsData} from "../../constants";

const AdvantageCard = ({icon, title, text}) => {
    return (
        <div className="advantage-card">
            <div className="advantage-card__top">
                <div className="advantage-card__top-icon">
                    {icon}
                </div>
                <div className="advantage-card__top-title">
                    {title}
                </div>
            </div>
            <div className="advantage-card__text">
                {text}
            </div>
        </div>
    );
};

const GraphicCard = ({icon, title, percents}) => {
    return (
        <div className="graphic-card">
            <div className="graphic-card__top">
                <div className="graphic-card__top-icon">
                    {icon}
                </div>
                <div className="graphic-card__top-percents">
                    {percents} %
                </div>
            </div>
            <div className="graphic-card__title">
                {title}
            </div>
        </div>
    );
};

const Advantages = () => {
    return (
        <section className="advantages" id="services">
            <Container>
                <div className="advantages__inner">
                    <Title
                        title={"В ШКОЛЕ ВЫ ПОЛУЧИТЕ"}
                    />
                    <div className="advantages__inner-list">
                        {AdvantagesListData.map(advantage => (
                            <AdvantageCard
                                icon={advantage.icon}
                                title={advantage.title}
                                text={advantage.text}
                            />
                        ))}
                    </div>
                    <div className="advantages__inner-statistics">
                        <div className="advantages__inner-statistics__graphics">
                            {AdvantagesStatisticsData.map(element => (
                                <GraphicCard
                                    icon={element.icon}
                                    title={element.title}
                                    percents={element.percents}
                                />
                            ))}
                        </div>
                        <div className="advantages__inner-statistics__info">
                            {AdvantagesInfoData.map(paragraph => (
                                <p>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Advantages;