
import React from 'react';
import BookingCard from '../BookingCard/BookingCard'
import burger from '../../../foodImages/burger.jpg'
import cake from '../../../foodImages/cake.jpg'
import chiken from '../../../foodImages/chiken.jpg'
import frenchFry from '../../../foodImages/frenchFry.jpg'
import friedRice from '../../../foodImages/friedRice.jpg'
import pasta from '../../../foodImages/pasta.jpg'
import sub from '../../../foodImages/sub.jpg'
import kacchi from '../../../foodImages/kacchi.jpg'




const BookOrder = ({date}) => {
    const bookingData = [
        {
            _id: '5e8df50be6e8231764dc23de',
            id: 1,
            subject: 'Burger',
            // visitingHour: '8:00 AM - 9:00 AM',
            img: burger,
            totalSpace: 15
        },
        {
            _id: '5e8df578e6e8231764dc23df',
            id: 2,
            subject: 'Cake',
            // visitingHour: '10:50 AM - 11:30 AM',
            totalSpace: 12,
            img: cake
        },
        {
            _id: '5e8df5aee6e8231764dc23e0',
            id: 3,
            subject: 'Chicken Fry',
            // visitingHour: '5:00 PM - 6:00 PM',
            totalSpace: 25,
            img: chiken
        },
        {
            _id: '5e8df63be6e8231764dc23e1',
            id: 4,
            subject: 'French Fry',
            // visitingHour: '7:00 AM - 8:30 AM',
            totalSpace: 25,
            img: frenchFry
        },
        {
            _id: '5e8df68de6e8231764dc23e2',
            id: 5,
            subject: 'Penni Pasta',
            // visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 19,
            img: pasta
        },
        {
            _id: '5e8df6a0e6e8231764dc23e3',
            id: 6,
            subject: 'Fried Rice',
            // visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 15,
            img: friedRice
        },
        {
            _id: '5e8df6a0e6e8231764dc23e4',
            id: 6,
            subject: 'Sub Sandwich',
            // visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 15,
            img: sub
        },
        {
             _id: '5e8df6a0e6e8231764dc23e4',
            id: 6,
            subject: 'Khacchi Briyani',
            // visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 15,
            img: kacchi
        }
    ]
    return (
        <section>
            <h2 className="text-center text-brand mb-5" style={{color:'#16164d'}}> <b>Available Booking Food on {date.toDateString()}</b></h2>
        
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
        
    );
};

export default BookOrder;