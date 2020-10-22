import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airBnb from '../../../images/logos/airbnb.png';


const LogoBar = () => {
    return (
        <section className="container">
            <div style={{marginTop:'100px'}} className="row d-flex justify-content-center align-items-center">
                <div className="col-md-2">
                    <img className="img-fluid w-75" src={slack} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="img-fluid w-75" src={google} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="img-fluid w-50" src={uber} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="img-fluid w-50" src={netflix} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="img-fluid w-75" src={airBnb} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default LogoBar;