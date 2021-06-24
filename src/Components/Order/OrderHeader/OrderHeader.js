import React from 'react';
import OrderFOOD from '../../../foodImages/OrderFOOD.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrderHeader = (handleChange ) => {
    // const [selectedDate, setSelectedDate] = useState(new Date());
    //    const handleChange = date => {
    //        console.log(date);
    //    }
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center header-container">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: "3A4256"}}> <b>Order Details<br /> Check Here </b> </h1>
                <Calendar
                    onChange={handleChange}
                    value={new Date()}
                />
               </div>
            <div className="col-md-6">
                <img src={OrderFOOD} alt="" style={{height:'400px',width:'600px'}} className="img-fluid" />

            </div>

        </main>
    );
};

export default OrderHeader;