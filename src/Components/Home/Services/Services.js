
import React from 'react';
import Mobile from '../../../foodImages/Mobile.jpg';
import Working from '../../../foodImages/Working.jpg';
import Delivery from '../../../foodImages/Delivery.jpg';

import ServiceDetail from '../ServiceDetails/ServiceDetail';


const serviceData = [
    {
        name: 'Mobile App',
        img: Mobile
    },
    {
        name: 'Delivery',
        img: Delivery
    },
    {
        name: 'Working',
        img: Working
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5 " style={{backgroundColor:" #fabaf5"}}>
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>FOODPANDA SERVICES</h5>
                <h2> FOODPANDA Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;