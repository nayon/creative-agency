import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <main>
        <div className="sticky">
            <Sidebar />
            <div className="row">
                <div className="col-md-3 py-3">
                    <Link to="/home"><img className="logo ml-5" src={logo} alt="" /></Link>
                </div>
                <div className="col-md-9">
                    <h4 className="order-heading">Review</h4>
                </div>
            </div>
            <div className="order-body">
              <ReviewForm />  
            </div>
        </div>
    </main>
    );
};

export default Review;