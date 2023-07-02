import React, {useState} from 'react';
import './gallery.scss';
import Container from "../../components/Container/container";
import GalleryPhoto1 from '../../images/gallery-photo.png';
import Title from "../../components/Title/title";

const FiltersListData = [
    'ВСЕ',
    'ТУРИСТЫ',
    'ПРИРОДА',
    'ПРОФИ'
]

const GalleryPhotosData = [
    [GalleryPhoto1],
    [GalleryPhoto1],
    [GalleryPhoto1],
    [GalleryPhoto1],
    [GalleryPhoto1],
    [GalleryPhoto1],
    [GalleryPhoto1]
]

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('ВСЕ');
    const changeActiveFilter = (filterName) => {
        console.log(filterName)
        setActiveFilter(filterName);
    }

    const setImageClassName = idx => idx === 0 || idx % 5 === 0;

    return (
        <section className="gallery">
            <Container>
                <div className="gallery__inner">
                    <Title
                        title={"ГАЛЕРЕЯ"}
                    />
                    <ul className="gallery__inner-filters">
                        {FiltersListData.map(filterName => (
                            <li
                                onClick={() => changeActiveFilter(filterName)}
                                className={(activeFilter === filterName ? 'active' : '')}>
                                {filterName}
                            </li>
                        ))}
                    </ul>
                    <div className="gallery__inner-photos">
                        {GalleryPhotosData.map((photo, idx) => (
                            <img
                                src={photo}
                                alt="image"
                                className={(setImageClassName(idx) ? 'wide' : '')}
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