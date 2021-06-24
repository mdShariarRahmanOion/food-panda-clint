import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './Components/Home/Home/Home';
import Order from './Components/Order/Oder/Order';
import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Admin from './Components/Admin/Admin';
import EmployMents from './Components/EmployMent/EmployMents/EmployMents';
import About from './Components/About/About';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
// import Contact from './Components/Home/Contact/COntact';
import Contact from './Components/Home/Contact/Contact';
// import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   
     <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
          <Route path ="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
        <Route path="/order">
          <Order></Order>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path ="/about">
          <About></About>
        </Route>
       {/* <PrivateRoute path="/admin">
         <Admin></Admin>

       </PrivateRoute> */}
       <Route path="/admin">
       <Admin></Admin>
       </Route>
       <Route path="/employments">
        <EmployMents></EmployMents>
       </Route>
       <Route path="/contact">
         <Contact></Contact>
       </Route>
          
      </Switch>
      </Router>
     </UserContext.Provider>
    
  );
}

export default App;
