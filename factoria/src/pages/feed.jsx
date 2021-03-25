import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/logoHeader';
import NavBar from '../components/navbar';
import Carousel2 from '../components/carousel2';
import Cards from '../components/cards';
import CardsNoticias from '../components/cardsNoticias';
import Inovacion from '../components/innovacion';
import Footer from '../components/footer';

const Feed = () => {
    return (
        <div>
            <Logo />
            <NavBar />
            <Carousel2 /> 
            <Cards />
            <CardsNoticias />
            <Inovacion />
            <Footer />
        </div>
    );
}

export default Feed;
