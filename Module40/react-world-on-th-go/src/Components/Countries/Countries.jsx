import React, { use, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h3>Rest Countries: {countries.length}</h3>
            <p>Travelled so far: {visitedCountries.length}</p>

            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries; <h3></h3>