import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Works.css';

import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';


const Works = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <section style={{ height: '680px', backgroundColor: '#111430' }} className="my-4">
            <div className="container pt-5">
                <h3 style={{ fontWeight: '700', marginBottom: '50px' }} className="text-white text-center pb-2 mt-4">Here are some of <span className="text-brand">our works</span></h3>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                            <img
                                className="d-block w-50 mx-auto img-fluid mb-5 pb-3"
                                src={carousel1}
                                alt="First slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 mx-auto img-fluid mb-5 pb-3"
                            src={carousel2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 mx-auto img-fluid mb-5 pb-3"
                            src={carousel3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 mx-auto img-fluid mb-5 pb-3"
                            src={carousel4}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 mx-auto img-fluid mb-5 pb-3"
                            src={carousel5}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default Works;