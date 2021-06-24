import React from 'react';
import feater from '../../../foodImages/feacter.jpg';
import { Link } from 'react-router-dom';
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5" style={{backgroundColor:'#b6b1ce'}}>
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" style={{height:'350px', paddingTop:'60px'}}src={feater} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center"style={{paddingTop:'60px'}}>
                        <h1>HOW IT WORKS || FOODPANDA</h1>
                        <p className="text-secondary my-5">
                        Foodpanda is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.This is how Foodpanda works:
                       
                            <li>Find a restaurant</li>
                            <li>Order what you want</li>
                            <li>Checkout And Payment</li>
                            <li>Delivery</li>
                            <li>Review</li>
                        </p>
                        
                        <Link className="btn btn-warning" to="/about">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;