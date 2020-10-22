import React from 'react';
import Menubar from '../Menubar/Menubar';
import headerImage from '../../../images/Frame.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-bg">
            <Menubar />
            <div className="container">
                <div style={{ height: '485px' }} className="row d-flex align-items-center">
                    <div className="col-md-4">
                        <div className="header-left">
                            <h1 style={{ fontWeight: '700' }} className="mb-4">Let’s Grow Your
                            Brand To The
                            Next Level</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button className="btn-brand mt-4">Hire Us</button>
                        </div>
                    </div>
                    <div className="col-md-8 header-right">
                        <div className="header-right p-5">
                            <img style={{width:'640px'}} src={headerImage} alt="" className="img-fluid mt-4 ml-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;