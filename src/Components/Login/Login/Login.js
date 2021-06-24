import React, { useContext, useState } from 'react';
import firebase from 'firebase/app' 
import "firebase/auth";
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import Navbar from '../../Shared/Navbar/Navbar';



const Login = () => {

  const [user, setUser] = useState({
    email: '',
    name: '',
    password: '',
    error: '',
    success: false
});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      } else {
        firebase.app();
    }
    
      const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          
        }).catch(function (error) {
          // const errorMessage = error.message;
          // console.log(errorMessage);
        });
      }

      const handleClick = () => {
     
        setLoggedInUser(user);
        history.replace(from);
    }
  
    return (
      <div>
      <div className="backGround">
      <Navbar> </Navbar>
     
      <br /> <br />
      <h1 style={{paddingLeft:'500px', color:'#1d4075'}}> This Page is Login Page: </h1>
        <div className="container">
        <div className="login-page " >
        <div className=" shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" placeholder="Enter Your User Name:" required  />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" placeholder="Enter Your Password:" required />
          </div>
          <div >
           <br />
            <input type="submit" name="LogIn" value="Login" onClick={handleClick} style={{border:'none', color:'white',backgroundColor:'#1d4075', width:'100px'}} />
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        </div>
      </div>
      
      </div>
        
      </div>
    );
};

export default Login;