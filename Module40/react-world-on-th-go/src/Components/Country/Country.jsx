import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        
        !visited && handleVisitedCountries(country);
    }

    return (
        <div className="country">
            <img src={country.flags.png} alt="" />
            <h4>Country name: {country.name.common}</h4>
            <p>Independent: {country.independent ? 'Yes' : 'No'}</p>
            <p>Population: {country.population}</p>
            <button className={`${visited ? 'country-visited' : 'country-not-visited'}`} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;<h4>Country name</h4>