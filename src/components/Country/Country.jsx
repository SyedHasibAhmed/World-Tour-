import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const[visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
    // console.log(handleVisitedCountry);

    // const passWithParams = () => handleVisitedCountry(country);

    return (
        <div className={`Country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visited Flags</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {/* { visited && 'I have visited this country' } */}
            { visited ? 'I have visited this country' : 'I want to visit' }
        </div>
    );
};

export default Country;