import React from 'react';

const OrderDataTable = (orders) => {
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Gender</th>
            <th className="text-secondary" scope="col">Age</th>
            <th className="text-secondary" scope="col">Weight</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
              orders.map((order, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.gender}</td>
                    <td>{order.age}</td>
                    <td>{order.weight}KG</td>
                    <td>{order.phone}</td>
                    <td>{order.email}</td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default OrderDataTable;