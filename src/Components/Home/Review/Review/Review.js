
import React from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails'
import harry from '../../../../foodImages/harry.jpg'
import liam from '../../../../foodImages/liam.jpg';
import './Review.css';

const blogData = [
    {
        title : '100% Delicious Mutton Claypot rice form Vaapa Saati Soruu',
        description : 'I ordered Mutton Claypot rice form Vaapa Saati Soruu, It was amazing and the food was delicious. My mom is a great cook and she said the food delivered was delicious. ',
        author:'Customer',
        authorImg : harry,
        date : '23 April 2019'
    },
    {
        title : 'I order some meal and they delivered in…',
        description : 'Foodpanda is very responsive and better to use than grab I feel. Fees wise I feel its more responsible. In case of any missing or wrong order, the customer service is also responsive and address problem within 15 mins.',
        author:'Customer',
        authorImg : liam,
        date : '20 Jun 2021'
    },
    
]

const Review = () => {
    return (
       <section className="review my-5" style={{backgroundColor:"#f7f3f5ec"}}>
           <div className="container mt-5  ">
               <div className="section-header text-center">
                    <h1 className="text-primary text-uppercase"> <b>Customer Review </b></h1>
               </div>
                <div className="d-flex row" style={{paddingLeft:"70px"}}>
               <div className="w-60 row mt-5 pt-5">
                    {
                        blogData.map(blog => <ReviewDetails blog={blog} key={blog.title}/>)
                    }
               </div>
               </div>
           </div>
       </section>

    );
};

export default Review;