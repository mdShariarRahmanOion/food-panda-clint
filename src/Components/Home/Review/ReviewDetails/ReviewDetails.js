import React from 'react';

const ReviewDetails = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <div className="card shadow-sm">
            <div className=" card-header col-md-12 align-items-center ">
                <img  src={authorImg} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body mt-3 mb-3">
                <h5>{title}</h5>
                <p >{description}</p>
            </div>
            
       </div>
    );
};

export default ReviewDetails;