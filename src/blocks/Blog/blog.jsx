import React from "react";
import './blog.scss';
import Slider from "react-slick";
import slide from '../../images/blog.png'
import Container from "../../components/Container/container";

export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                    <img src={slide} alt=""/>
                    <img src={slide} alt=""/>
                    <img src={slide} alt=""/>
            </Slider>
        </div>
    );
}

const Blog = () => {
    return (
        <section className="blog">
            <Container>
            </Container>
        </section>
    );
};

export default Blog;