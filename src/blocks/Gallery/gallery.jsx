import React, {useState} from 'react';
import './gallery.scss';
import Container from "../../components/Container/container";
import Title from "../../components/Title/title";
import {GalleryFiltersListData, GalleryPhotosData} from "../../constants";

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const changeActiveFilter = (filterName) => setActiveFilter(filterName);
    const setImageClassName = (idx) => idx === 0 || idx % 5 === 0;

    return (
        <section className="gallery">
            <Container>
                <div className="gallery__inner">
                    <Title
                        title={"ГАЛЕРЕЯ"}
                    />
                    <ul className="gallery__inner-filters">
                        {GalleryFiltersListData.map(filterName => (
                            <li
                                onClick={() => changeActiveFilter(filterName)}
                                className={(activeFilter === filterName ? 'active' : '')}
                            >
                                {filterName}
                            </li>
                        ))}
                    </ul>
                    <div className="gallery__inner-photos">
                        {GalleryPhotosData.map((photo, idx) => (
                            <img
                                src={photo.image}
                                alt="image"
                                className={(setImageClassName(idx) ? "wide" : "")}
                                style={{display: activeFilter === photo.filter || activeFilter === 'all' ? "block" : "none"}}
                            />
                        ))}
                    </div>
                    <div className="gallery__inner-upload">
                        <button>ПОКАЗАТЬ ЕЩЕ</button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Gallery;