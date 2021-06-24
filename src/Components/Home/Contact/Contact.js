import React from 'react';
import './Contact.css';
import Navbar from '../../Shared/Navbar/Navbar';
const Contact = () => {
    return (
        <div>
        <Navbar> </Navbar>
       <section className="contact my-5 py-5">
           
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h1 className="text-primary">Contact US</h1>
                    <h1>This is Contact Form</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-brand"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
       </div>
    );
};

export default Contact;