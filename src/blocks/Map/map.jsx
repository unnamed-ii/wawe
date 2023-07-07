import React from 'react';
import './map.scss';
import Container from "../../components/Container/container";

const Map = () => {
    return (
        <section className="map">
            <Container>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78900.25937872886!2d-13.678263229258883!3d29.078160881815837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4618dc4d980235%3A0x5bc11b6edbde6b11!2sClub%20La%20Santa!5e0!3m2!1sru!2str!4v1688763610133!5m2!1sru!2str"
                    width="600" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </Container>
        </section>
    );
};

export default Map;