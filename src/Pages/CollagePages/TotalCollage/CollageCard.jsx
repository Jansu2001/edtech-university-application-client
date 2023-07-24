import React from 'react';
import { Link } from 'react-router-dom';

const CollageCard = ({ collage }) => {
    const { _id, admission_date, college_name, college_photo, college_rating, events_details, research_count, sports_facilities } = collage
    console.log(collage);
    return (
        <div>

            <div className="card card-compact rounded-t-none bg-green-700 shadow-xl">
                <figure>
                    <img className="block h-[300px] w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110" src={college_photo} alt="Shoes" /></figure>
                <div className="card-body h-64">
                    <h2 className="card-title">{college_name}</h2>
                    <p>Addmission: {admission_date}</p>
                    <p>rating: {college_rating}</p>
                    <div className="card-actions ">
                        <p>Events: {events_details}</p>
                        <p>Research: {research_count}</p>
                        <p>Sports</p>
                        <button className="btn rounded-none w-full"><Link to={`/collage-details/${_id}`}> View Details </Link> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollageCard;