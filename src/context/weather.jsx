import { createContext, useContext, useState } from "react";
import { getWeather, getWeatherData } from "../api/api";


const WeatherContext = createContext(null);


export const useWeather =() => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) =>{
    const [data, setData] = useState(null);
    const [searchcity,setSearchcity] = useState(null);
    
    const fetchData = async () => {
        const response = await getWeather(searchcity);
        setData(response);
    };

    const fetchCurrentUserLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherData(position.coords.latitude, position.coords.longitude).then((data) => setData(data));
        });
    };

    return(
        <WeatherContext.Provider value={{searchcity, data, setSearchcity, fetchData, fetchCurrentUserLocation}} >
            {props.children}
        </WeatherContext.Provider>
    );
};

