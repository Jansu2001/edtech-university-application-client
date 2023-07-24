import { Link } from "react-router-dom";
import useAllCollages from "../../../Hooks/useAllCollages";
import CollageCard from "./CollageCard";

const TotalCollage = () => {



    const [collages] = useAllCollages()





    return (

        <div className="grid lg:grid-cols-3 gap-5">

            {
                collages.map(collage => <CollageCard
                    key={collage._id}
                    collage={collage}
                ></CollageCard>)
            }

        </div>
    );
};

export default TotalCollage;