import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Feature from '../Feature/Feature';
import Blogs from '../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import Review from '../Review/Review/Review';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Blogs></Blogs>
           <Feature></Feature>
           
           <Review> </Review>
           <Footer></Footer>
         
        </div>
    );
};

export default Home;