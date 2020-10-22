import React, { createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home'
import Login from './Components/Pages/Login/Login/Login';
import ServiceList from './Components/Pages/Customer/ServiceList/ServiceList';
import Review from './Components/Pages/Customer/Review/Review';
import AdminServiceList from './Components/Pages/Admin/AdminServiceList/AdminServiceList';
import MakeAdmin from './Components/Pages/Admin/MakeAdmin/MakeAdmin';
import Order from './Components/Pages/Customer/Order/Order';
import { useState } from 'react';
import service1 from './images/icons/service1.png';
import service2 from './images/icons/service2.png';
import service3 from './images/icons/service3.png';
import AdminHome from './Components/Pages/Admin/AdminHome/AdminHome';
import Admin from './Components/Pages/Admin/Admin/Admin';
import { useEffect } from 'react';
import NoMatch from './Components/NoMatch/NoMatch';
import AdminLogin from './Components/Pages/Admin/AdminLogin/AdminLogin';
// import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';


export const userContext = createContext();


function App() {
  const serviceData = [
    {
        icon: service1,
        title: 'Web & Mobile design',
        details: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        icon: service2,
        title: 'Graphic design',
        details: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        icon: service3,
        title: 'Web development',
        details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
];
  const [loggedInUser, loggedOutUser] = useState([]);
  const [adminEmail, setAdminEmail] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/adminEmail')
      .then(res => res.json())
      .then(data => setAdminEmail(data))
  }, [])

  const admin = adminEmail.map(e => e.email);
  // console.log(admin[0]);

  return (
    <userContext.Provider value={{value1:[loggedInUser, loggedOutUser], value2: serviceData, value3:admin }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/serviceList">
            <ServiceList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/adminServiceList">
            <AdminServiceList />
          </Route>
          <Route path="/admin">
            <AdminHome />
          </Route>
          <Route path="/addedService">
            <Admin />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route>
            <AdminLogin />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider >
  );
}

export default App;
