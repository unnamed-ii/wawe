import React from 'react';
import './infovideo.scss';
import Container from "../../components/Container/container";
import videoImage from '../../images/video-img.png';
import {InfoVideoData} from "../../constants";

const InfoVideo = () => {
    return (
        <section className="info-video">
            <Container>
                <div className="info-video__inner">
                    <img src={videoImage} alt="" className="info-video__inner-image"/>
                    <ul className="info-video__inner-information">
                        {InfoVideoData.map(element => (
                            <li>
                                {element.number}
                                <span>{element.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default InfoVideo;