import React from 'react';
import ShowReview from '../../Pages/Customer/Review/ShowReview/ShowReview';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import LogoBar from '../LogoBar/LogoBar';
import Services from '../Services/Services';
import ShowAddedServices from '../ShowAddedServices/ShowAddedServices';
import Works from '../Works/Works';


const Home = () => {
    return (
        <>
            <Header />
            <LogoBar />
            <Services />
            <ShowAddedServices />
            <Works />
            <ShowReview />
            <ContactForm />
        </>
    );
};

export default Home;