import { Link } from "react-router-dom";

const CollageCard = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-5">
            <div className="card card-compact rounded-t-none bg-green-700 shadow-xl">
                <figure><img className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110" src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Sultan Sahabuddin Collage</h2>
                    <p>Addmission: 29-07-2023</p>
                    <div className="card-actions ">
                        <p>Events: Events</p>
                        <p>Reachers History</p>
                        <p>Sports</p>
                        <button className="btn rounded-none w-full"><Link to='/collage-details'> View Details </Link> </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact rounded-t-none bg-green-700 shadow-xl">
                <figure><img className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110" src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Sultan Sahabuddin Collage</h2>
                    <p>Addmission: 29-07-2023</p>
                    <div className="card-actions ">
                        <p>Events: Events</p>
                        <p>Reachers History</p>
                        <p>Sports</p>
                        <button className="btn rounded-none w-full"><Link to='/collage-details'> View Details </Link> </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact rounded-t-none bg-green-700 shadow-xl">
                <figure><img className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110" src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Sultan Sahabuddin Collage</h2>
                    <p>Addmission: 29-07-2023</p>
                    <div className="card-actions ">
                        <p>Events: Events</p>
                        <p>Reachers History</p>
                        <p>Sports</p>
                        <button className="btn rounded-none w-full"><Link to='/collage-details'> View Details </Link> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollageCard;