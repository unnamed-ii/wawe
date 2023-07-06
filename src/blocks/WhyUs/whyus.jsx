import React from 'react';
import './whyus.scss';
import Container from "../../components/Container/container";
import contentImage from '../../images/why-us.png';
import Title from "../../components/Title/title";
import {WhyUsData} from "../../constants";

const WhyUs = () => {
    return (
        <section className="why-us">
            <Container>
                <div className="why-us__inner">
                    <Title
                        title={"ПОКОРЯЙ ВЕРШИНЫ"}
                        isLeft={true}
                    />
                    <div className="why-us__inner-text">
                        {WhyUsData.map(paragraph => (
                            <p>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <img src={contentImage} alt="image" className="why-us__inner-image"/>
            </Container>
        </section>
    );
};

export default WhyUs;