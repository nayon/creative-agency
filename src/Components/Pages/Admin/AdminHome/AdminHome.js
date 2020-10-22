import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../../../App';
import Admin from '../Admin/Admin';

const AdminHome = () => {
    const { value1, value3 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const admin = value3;
    // const { value3 } = useContext(userContext);
    // const [adminEmail, setAdminEmail] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/adminEmail')
    //     .then(res => res.json())
    //     .then(data => setAdminEmail(data))
    // }, [])
    // console.log(adminEmail, loggedInUser.email);

    // const admin = adminEmail.filter(eml => eml.email === loggedInUser.email);
    // const admin = adminEmail.map(e => e.email);
    // console.log(admin[0]);

    return (
        <>
           {
               (admin[0] === loggedInUser.email) && <Admin /> 
           }
        </>
    );
};

export default AdminHome;