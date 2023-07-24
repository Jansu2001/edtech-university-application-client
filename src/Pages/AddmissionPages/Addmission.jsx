import { Link } from "react-router-dom";
import useAllCollages from "../../Hooks/useAllCollages";

const Addmission = () => {


    const [collages] = useAllCollages()

    const { _id, admission_date, college_name, college_photo, college_rating, events_details, research_count, sports_facilities } = collages
    console.log(collages);

    return (
        <div>



            <div className="overflow-x-auto">
                <table className="table mx-auto">

                    <tbody>
                        {/* row 1 */}

                        {
                            collages.map(collage => <tr
                                key={collage._id}
                                collage={collage}
                            >
                                <ul className="p-10 space-y-5">
                                    <li className="text-5xl ">
                                        <button className="btn w-full h-32">
                                            <Link to='/addmission-form'>{collage.college_name}</Link>
                                            {/* TODO:  */}

                                        </button>
                                    </li>
                                </ul>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Addmission;