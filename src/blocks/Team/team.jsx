import React from 'react';
import './team.scss';
import Container from "../../components/Container/container";
import trainerImg from '../../images/trainer.png'

const TeamData = [
    {
        title: 'Mike',
        subtitle: 'Главный инстуктор',
        image: trainerImg,
    },
    {
        title: 'Bob',
        subtitle: 'Инстуктор',
        image: trainerImg,
    },
    {
        title: 'Tim',
        subtitle: 'Инстуктор',
        image: trainerImg,
    },
]

const TrainerCard = ({image, title, subtitle}) => {
    return (
        <div className="trainer">
            <img src={image} alt="image" className="trainer__image"/>
            <div className="trainer__title">
                {title}
            </div>
            <div className="trainer__subtitle">
                {subtitle}
            </div>
        </div>
    )
}

const Team = () => {
    return (
        <section className="team">
            <Container>
                <div className="team__inner">
                    <div className="team__inner-title">
                        НАША КОМАНДА
                        <span>/</span>
                    </div>
                    <div className="team__inner-list">
                        {TeamData.map(trainer =>
                            <TrainerCard
                                title={trainer.title}
                                subtitle={trainer.subtitle}
                                image={trainer.image}
                            />
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Team;