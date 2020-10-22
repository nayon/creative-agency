import React from 'react';
import { Link } from 'react-router-dom';

const AddedServiceDetails = ({ addedServices }) => {
    const {title, description } = addedServices;
    
    return (
        <Link to="/login" className="col-md-4 col-sm-6 nav-link">
        <div className="service-card text-center my-5 p-5">
            {
                addedServices.image && <img style={{height:'75px'}} src={`data:image/png;base64,${addedServices.image.img}`}  alt="" />
            }
            <h5 style={{ fontWeight: '700' }} className="header-text mt-3 mb-2">{title}</h5>
            <p className="text-p px-3">{description}</p>
        </div>
    </Link>
    );
};

export default AddedServiceDetails;