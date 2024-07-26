import React, {useContext} from 'react';
import { useWeather } from '../context/weather';

const Input = () => {
    const weather = useWeather();
    console.log("Weather",weather);
    return(
        <input className='input-field'
            placeholder = "Search weather"
            value = {weather.searchcity}
            onChange = {(e) => weather.setSearchcity(e.target.value)}

        />
    );
};

export default Input;
