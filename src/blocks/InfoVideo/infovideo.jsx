import React from 'react';
import './infovideo.scss';
import Container from "../../components/Container/container";
import {InfoVideoData} from "../../constants";
import videoPoster from '../../images/video-img.png';
import surfingVideo from "../../videos/surfing-video.mp4"

const InfoVideo = () => {
    return (
        <section className="info-video">
            <Container>
                <div className="info-video__inner">
                    <video controls poster={videoPoster}>
                        <source src={surfingVideo} type="video/mp4" />
                    </video>
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