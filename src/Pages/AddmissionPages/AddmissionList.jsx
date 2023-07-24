import React from 'react';
import { Link } from 'react-router-dom';

const AddmissionList = ({ collage }) => {


    const { _id, admission_date, college_name, college_photo, college_rating, events_details, research_count, sports_facilities } = collage
    console.log(collage);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table mx-auto">

                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <ul className="p-10 space-y-5">
                                <li className="text-5xl ">
                                    <button className="btn w-full h-32">
                                        <Link to={`/addmission-form/${_id}`}>{college_name}</Link>
                                        {/* TODO:  */}

                                    </button>
                                </li>
                            </ul>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddmissionList;