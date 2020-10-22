import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Status from '../Status/Status';


const AdminServiceTable = () => {
    const [placedOrder, setPlacedOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setPlacedOrder(data))
    }, [])

    return (
        <div className="form-body pt-4">
            <div className="bg-white p-3 admin-form">
                <table className="table table-borderless">
                    <thead style={{ backgroundColor: '#F5F6FA' }} className="table-head">
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email ID</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Project Details</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            placedOrder.map((order, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.data.name}</td>
                                    <td>{order.data.email}</td>
                                    <td>{order.data.title}</td>
                                    <td>{order.data.details}</td>
                                    <td><Status /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceTable;