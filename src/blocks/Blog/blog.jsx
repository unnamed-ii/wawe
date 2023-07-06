import React from "react";
import './blog.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../components/Title/title";
import {BlogData} from "../../constants";

const Blog = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="blog" id="blog">
            <Title
                title={"БЛОГ"}
            />
            <Slider {...sliderSettings}>
                {BlogData.map(slide => (
                    <div className="blog__slide">
                        <img src={slide.image} alt="" className="blog__slide-image"/>
                        <div className="blog__slide-text">
                            <h3 className="blog__slide-text__title">{slide.title}</h3>
                            <h5 className="blog__slide-text__subtitle">{slide.subtitle}</h5>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Blog;