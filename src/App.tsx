import React, { useState, useEffect } from 'react';

import { URL, APISTRING } from './data/contants'

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = ()  => {
  const [ movies, setMovies ] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
    const moviesData = await response.json();
    setMovies(moviesData.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

   

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero {...movies[0] } />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
