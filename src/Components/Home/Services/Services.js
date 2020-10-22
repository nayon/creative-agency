import React, { useContext } from 'react';
import { userContext } from '../../../App';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const {value2} = useContext(userContext);
    const serviceData = value2;

    return (
        <section>
            <div className="container">
                <div style={{marginTop:'180px'}} className="service-section">
                    <h3 style={{ fontWeight: '700' }} className="header-text text-center pb-2">Provide awesome <span className="text-brand">services</span></h3>
                    <div className="row d-flex justify-content-center align-items-center">
                        {
                            serviceData.map(srv => <ServiceDetails key={srv.title} services={srv} />)
                        }
                     
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;