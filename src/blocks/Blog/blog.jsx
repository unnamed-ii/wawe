import React from "react";
import './blog.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide from '../../images/blog.png'

const slides = [
    {
        url: slide,
        title: 'ЧТО НЕОБХОДИМО ВЗЯТЬ С СОБОЙ НА СЕРФ ТУР',
        subtitle: 'ТОП 20 необходимых вещей для комфортного отдыха и обучения'
    },
    {
        url: slide,
        title: 'ЧТО НЕОБХОДИМО ВЗЯТЬ С СОБОЙ НА СЕРФ ТУР',
        subtitle: 'ТОП 20 необходимых вещей для комфортного отдыха и обучения'
    },
    {
        url: slide,
        title: 'ЧТО НЕОБХОДИМО ВЗЯТЬ С СОБОЙ НА СЕРФ ТУР',
        subtitle: 'ТОП 20 необходимых вещей для комфортного отдыха и обучения'
    },
]

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
            <div className="blog__title">
                БЛОГ
                <span>/</span>
            </div>
            <Slider {...sliderSettings}>
                {slides.map(slide => (
                    <div className="blog__slide">
                        <img src={slide.url} alt="" className="blog__slide-image"/>
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