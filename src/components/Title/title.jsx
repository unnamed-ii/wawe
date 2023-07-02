import React from 'react';
import './title.scss';

const Title = ({title, isLeft}) => {
    return (
        <h1 className={"block-title" + (isLeft ? ' left' : '')}>
            {title}
            <span>/</span>
        </h1>
    );
};

export default Title;