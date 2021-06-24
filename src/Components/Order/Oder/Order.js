import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookOrder from '../BookOrder/BookOrder';
import OrderHeader from '../OrderHeader/OrderHeader';
import './Order.css';


const Order = () => {
        // const [selectedDate, setSelectedDate] = useState(new Date());
        const [selectDate, setSelectDate] = useState( new Date());
        const handleChange = date => {
            // console.log(date);
            setSelectDate(date);
        }
    return (
        <div>
             <Navbar class="navbar"></Navbar>
             {/* <OrderHeader handleDateChange={handleDateChange}></OrderHeader>
             <BookOrder date={selectedDate}></BookOrder> */}
             <OrderHeader  handleChange={handleChange}></OrderHeader>
             {/* <BookOrder date={selectedDate}></BookOrder> */}
             <br />
             <br />
             <br />
             <BookOrder date={selectDate}></BookOrder>
           <Footer></Footer>
          
        </div>
    );
};

export default Order;