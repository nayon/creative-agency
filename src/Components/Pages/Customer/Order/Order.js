import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png';
import './Order.css';
import OrderForm from '../OrderForm/OrderForm';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <main>
            <div className="sticky">
                <Sidebar />
                <div className="row">
                    <div className="col-md-3 py-3">
                        <Link to="/home"><img className="logo ml-5" src={logo} alt="" /></Link>
                    </div>
                    <div className="col-md-9">
                        <h4 className="order-heading">Order</h4>
                    </div>
                </div>
                <div className="order-body">
                    <OrderForm />
                </div>
            </div>
        </main>
    );
};

export default Order;