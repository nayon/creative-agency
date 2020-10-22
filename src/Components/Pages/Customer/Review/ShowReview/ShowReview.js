import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../../../../App';
import ClientsFeedback from '../../../../Home/ClientsFeedback/ClientsFeedback';

const ShowReview = () => {
    const [review, setReview] = useState([]);
    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const { photo } = loggedInUser;

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
  
    return (
        <div className="container">
            <h3 style={{ fontWeight: '700', marginBottom: '100px', marginTop: '80px'}} className="header-text text-center pb-2">Clients <span className="text-brand">Feedback</span></h3>
            <div className="row">
                {
                    review.map(rvw => <ClientsFeedback key={rvw._id} review={rvw} />)
                }
            </div>
        </div>
    );
};

export default ShowReview;