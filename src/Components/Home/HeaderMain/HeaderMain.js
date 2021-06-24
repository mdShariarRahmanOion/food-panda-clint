import React from 'react';
import featchers from '../../../foodImages/featchers.jpg';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 text-black">
                <h1 style={{color: "blue"}}> <b> FOOD PANDA Dhaka</b> <br />The Largest food delivery of Bangladesh</h1>
                <p className="text-black"> <b>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your home or office? Then foodpanda Bangladesh is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and local favourites near you to help satisfy your hunger through our online food delivery service. Cuisines are diverse: whether you fancy a juicy burger from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, foodpanda Bangladesh has a wide range of 2000+ restaurants available from Dhaka, to Chittagong through to Sylhet</b> </p>
                {/* <button className="btn btn-primary">GET ORDER</button> */}
                <Link className="btn btn-warning" to="/order">GET ORDER</Link>
            </div>
            <div className="col-md-6">
                <img src={featchers} alt="" className="img-fluid" />

            </div>

        </main>
        
    );
};

export default HeaderMain;