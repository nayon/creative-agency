import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserPlus, faEnvelopeOpenText,  faPlus, } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const AdminSidebar = () => {

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled ml-3 mt-5">
                <li>
                <Link className="text-secondary font-weight-bold" to="/adminServiceList">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-secondary font-weight-bold" to="/addedService">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>

                <li>
                    <Link className="text-secondary font-weight-bold" to="/makeAdmin">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                 </ul>
        </div>
    );
};

export default AdminSidebar;