import React from 'react';
import icon1 from '../../../../images/icons/service1.png';
import icon2 from '../../../../images/icons/service2.png';

const ServiceDetails = ({ orders }) => {
    const { title, details } = orders.data;
    console.log(title, orders);
    return (
        <div className="col-md-5 pt-5">
            <div style={{ borderRadius: '20px' }} className="single-service bg-white p-5">
                <img style={{ height: '65px' }} src={icon1} alt="" className="img-fluid mb-3" />
                <h5>{title}</h5>
                <p>{details}</p>
            </div>
        </div>

    );
};

export default ServiceDetails;