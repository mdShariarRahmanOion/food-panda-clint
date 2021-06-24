import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import OrderByDay from '../OrderByDay/OrderByDay';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectDate, setSelectDate] = useState( new Date());
    const [orders, setOrders] = useState([])
        const handleChange = date => {
            setSelectDate(date);
        }
        useEffect(() => {
            fetch('http://localhost:5055/orderByDay',{
                method: 'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({ date: selectDate, email: loggedInUser.email })

            })
            .then(res => res.json())
            .then(data =>  setOrders(data))

        },[selectDate])

    return (
        <section>
            <div>
                <Navbar></Navbar>
            </div>
            
        <div style={{ height:"100%", backgroundColor:"#f8b8d6e7"}} className="container-fluid row">
            <div className="col-md-2">
                <SideBar> </SideBar>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
            <Calendar
                onChange={handleChange}
                value={new Date()}
            />
            </div>
            <div className="col-md-5">
               
                <OrderByDay orders={orders} > </OrderByDay>
            </div>
           
        </div>
    </section>

    );
};

export default Dashboard;