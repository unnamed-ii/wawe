import React from 'react';
import './map.scss';
import Container from "../../components/Container/container";
import mapImage from '../../images/map.png';

const Map = () => {
    return (
        <section className="map">
            <Container>
                <img src={mapImage} alt="image" className="map__image"/>
            </Container>
        </section>
    );
};

export default Map;