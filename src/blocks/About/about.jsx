import React from "react";
import './about.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {AboutLeftColumnData, AboutRightColumnData} from "../../constants";

const About = () => {
    return (
        <Container>
            <section className="about" id="about">
                <div className="about__inner">
                    <Title
                        title={"О ШКОЛЕ, О СЕРФИНГЕ, О КАНАРАХ"}
                    />
                    <div className="about__inner-text">
                        <div className="about__inner-text__column">
                            {AboutLeftColumnData.map(paragraph => (
                                <p>{paragraph.text}</p>
                            ))}
                        </div>
                        <div className="about__inner-text__column">
                            {AboutRightColumnData.map(paragraph => (
                                <p>{paragraph.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default About;