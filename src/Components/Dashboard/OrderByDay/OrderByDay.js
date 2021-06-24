import React from 'react';
import OrderShortList from '../Dashboard/OrderShortList/OrderShortList';
const OrderByDay = ({orders}) => {
    console.log(orders);
    return (
        <div>
            <h2 className="text-brand text-center">Orders</h2>
            {
                orders.length ?
        
                <OrderShortList orders={orders}> </OrderShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No orders for this Date</h4>
                </div>
                
            }
            
        </div>
    );
};

export default OrderByDay;