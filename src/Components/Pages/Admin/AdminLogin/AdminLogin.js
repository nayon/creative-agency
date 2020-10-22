import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';
import googleIcon from '../../../../images/icons/google.png';
import { userContext } from '../../../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/FirebaseConfig/FirebaseConfig';

const AdminLogin = () => {
    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/admin" } };

    // initializing firebase app
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

     // google sign in
     const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photo: photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    return (
        <div className="container text-center p-5">
            <Link to="/home"><img style={{width:'200px'}} className='mx-5 pr-5' src={logo} alt="" /></Link>
            <div className="login-form border bg-white my-5 mx-auto d-flex justify-content-center align-items-center">
                <div>
                    <h3>Login With</h3>
                    <p onClick={handleGoogleSignIn} className='google-sign-in mt-5'><img src={googleIcon} alt="" /><span className='login-text'>Continue with Google</span></p>
                    <p>Don't have an account? <Link to='/login'>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;