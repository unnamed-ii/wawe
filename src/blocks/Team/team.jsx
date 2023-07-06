import React from 'react';
import './team.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {TeamData} from "../../constants";

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
        <section className="team" id="team">
            <Container>
                <div className="team__inner">
                    <Title
                        title={"НАША КОМАНДА"}
                    />
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