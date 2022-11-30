import React, { useState, useEffect } from 'react';

import axios from 'axios';


import { URL, APISTRING } from './data/contants'

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from './components/Loading';

const App = () => {
  const [ movies, setMovies ] = useState<any[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true);
  const url = `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        setMovies([])
      }
    }

    fetchData();
    setLoading(false);
  }, [url]);

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      {loading ? <Loading title="Carregando..."/> : <Hero {...movies[0] } />}
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;