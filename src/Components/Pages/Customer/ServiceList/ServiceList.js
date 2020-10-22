import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../../../App';
import { useContext } from 'react';

const ServiceList = () => {
    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [placedOrder, setPlacedOrder] = useState([]);

    const userEmail = { ...loggedInUser }


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setPlacedOrder(data))
    }, [])

    const selectedOrder = placedOrder.filter(order => order.data.email === userEmail.email)

    return (
        <main>
            <div className="sticky">
                <Sidebar />
                <div className="row">
                    <div className="col-md-3 py-3">
                        <Link to="/home"><img className="logo ml-5" src={logo} alt="" /></Link>
                    </div>
                    <div className="col-md-9">
                        <h4 className="order-heading">Service List</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="order-body">
                        <div  style={{ marginLeft: '10%' }}  className="row">
                            {
                                selectedOrder.map(order => <ServiceDetails key={order._id} orders={order} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceList;