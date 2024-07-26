const baseURL = "https://api.weatherapi.com/v1/current.json?key=ce4a2751f1254ffa9ba92340242607";


export const getWeather = async (city) => {   
    const response = await fetch(`${baseURL}&q=${city}&api=yes`)
    
    return await response.json();
};
export const getWeatherData = async (lat , lon) => {   
    const response = await fetch(`${baseURL}&q=${lat},${lon}&api=yes`)
    
    return await response.json();
};