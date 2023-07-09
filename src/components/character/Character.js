import React from 'react';

const Character = (props) => {
    let {id, name, status, specias, gender, image} = props;
    return (
        <div>
            <h2>{id}{name}</h2>
            <p>{status} {specias}{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;