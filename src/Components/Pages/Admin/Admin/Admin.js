import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../AdminSideBar/AdminSidebar';
import logo from '../../../../images/logos/logo.png';
import AddService from '../AddService/AddService';

const Admin = () => {
    return (
        <main>
        <div className="sticky">
            <AdminSidebar />
            <div className="row">
                <div className="col-md-3 py-3">
                    <Link to="/home"><img className="logo ml-5" src={logo} alt="" /></Link>
                </div>
                <div className="col-md-9">
                    <h4 className="order-heading">Add Service</h4>
                </div>
            </div>
            <div className="order-body">
                <AddService />
            </div>
        </div>
    </main>
    );
};

export default Admin;