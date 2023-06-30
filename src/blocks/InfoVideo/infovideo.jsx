import React from 'react';
import './infovideo.scss';
import Container from "../../components/Container/container";
import videoImage from '../../images/video-img.png';

const InfoVideo = () => {
    return (
        <section className="info-video">
            <Container>
                <div className="info-video__inner">
                    <img src={videoImage} alt="" className="info-video__inner-image"/>
                    <ul className="info-video__inner-information">
                        <li>
                            450
                            <span>туристов</span>
                        </li>
                        <li>
                            2500
                            <span>часов катания</span>
                        </li>
                        <li>
                            10
                            <span>проф. тренеров</span>
                        </li>
                        <li>
                            365
                            <span>дней в году</span>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default InfoVideo;