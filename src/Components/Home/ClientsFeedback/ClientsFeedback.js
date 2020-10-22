import React from 'react';

const ClientsFeedback = ({ review }) => {
    const { name, companyName, details } = review.data;

    return (
        <div className="col-md-4 col-sm-6">
            <div className="feedback-card border p-4 mb-2">
                <div className="row d-flex align-items-center mls-2">
                    <img style={{ width: '75px', borderRadius: '50%' }} className="img-fluid mr-4" src={review.photo} alt="" />
                    <div>
                        <h6 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '-1px' }}>{name}</h6>
                        <p><strong>{companyName}</strong></p>
                    </div>
                </div>
                <p className="text-p mt-3 mb-n1">{details}</p>
            </div>
        </div>
    );
};

export default ClientsFeedback;