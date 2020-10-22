import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AddedServiceDetails from '../AddedServiceDetails/AddedServiceDetails';

const ShowAddedServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
        <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        services.map(srv => <AddedServiceDetails key={srv._id} addedServices={srv} />)
                    }
                 
                </div>
            </div>
    </section>
    );
};

export default ShowAddedServices;