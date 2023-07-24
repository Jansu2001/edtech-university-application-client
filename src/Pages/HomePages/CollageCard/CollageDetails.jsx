import { useLoaderData } from "react-router-dom";

const CollageDetails = () => {

    const collageDetails = useLoaderData()
    console.log(collageDetails);
    const { _id, admission_date, college_name, college_photo, college_rating, events_details, research_count, sports_facilities } = collageDetails[0]


    return (
        <div>

            <div className="card h-[700px] bg-base-100 shadow-xl">


                <figure><img src={college_photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollageDetails;