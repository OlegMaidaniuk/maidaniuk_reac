import React from 'react';
import'./simpson.css';
const Simp = ({name,surname,age,photo}) => {
    return (
        <div className={`member`}>
          <h2>{name} {surname} {age} {photo}</h2>
        <img src={photo} alt={name}/>
        </div>
    );
};

export default Simp;