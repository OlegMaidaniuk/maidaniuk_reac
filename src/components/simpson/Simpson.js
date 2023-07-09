import React from 'react';
import './Simpson.css';
const Simpson = (props) => {
    let {name, surname, gender, age, photo} = props;
    return (
        <div className={'number'}>
<h2>{name} {surname} {age} {gender}</h2>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;