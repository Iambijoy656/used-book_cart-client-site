import React from 'react';
import Banner from '../Banner/Banner';
import Benifit from '../Benifit/Benifit';
import Books from '../Books/Books';
import HomePageBooks from '../HomePageBooks/HomePageBooks';
import SubscribeSection from '../SubscribeSection/SubscribeSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Benifit></Benifit>
            <HomePageBooks></HomePageBooks>
            <Books></Books>
            <SubscribeSection></SubscribeSection>

        </div>
    );
};

export default Home;