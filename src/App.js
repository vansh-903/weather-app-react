import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Button from './components/button';
import Input from './components/input';

import {useEffect} from 'react';

import { useWeather } from './context/weather';


function App() {

  const weather = useWeather();
  console.log(weather);

  useEffect(()=>{
    weather.fetchCurrentUserLocation();
  },[] );

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button onClick={() => weather.fetchCurrentUserLocation()} value="Refresh" />
    </div>
  );
}

export default App;
