import React, { useState } from 'react';
import OrderFrom from '../OrderFrom/OrderFrom';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
   
    return (
        <div className="col-md-3 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                <img style={{height: '220px', width:'220px'}} src={booking.img} alt="" />
                    <h5 className="card-title " styl={{color: '#16164d'}}>{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} PACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase text-brand">Buy Now  </button>
                    {/* <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm> */}
                    <OrderFrom modalIsOpen={modalIsOpen} orderOn={booking.subject} closeModal={closeModal}  date={date}></OrderFrom>
                   
                </div>
            </div>
        </div>
    );
};

export default BookingCard;