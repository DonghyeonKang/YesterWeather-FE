import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DateBar from './components/DateBar';
import WeatherList from './components/WeatherList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <SearchBar/>
      <DateBar/>
      <WeatherList/>
      <Footer/>
    </>
  );
}

export default App;
