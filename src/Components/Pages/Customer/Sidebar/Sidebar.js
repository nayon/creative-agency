import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faUserPlus, faUsers, faShoppingCart, faEnvelopeOpenText, faSms } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled ml-3 mt-5">
                <li>
                    <Link to="/order" className="text-secondary font-weight-bold">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-secondary font-weight-bold" to="/serviceList">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} /> <span>Service List</span>
                    </Link>
                </li>

                <li>
                    <Link className="text-secondary font-weight-bold" to="/review">
                        <FontAwesomeIcon icon={faSms} /> <span>Review</span>
                    </Link>
                </li>
                 </ul>
        </div>
    );
};

export default Sidebar;