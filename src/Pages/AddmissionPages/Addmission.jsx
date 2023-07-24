import { Link } from "react-router-dom";
import useAllCollages from "../../Hooks/useAllCollages";
import AddmissionList from "./AddmissionList";

const Addmission = () => {


    const [collages] = useAllCollages()


    console.log(collages);

    return (
        <div>

            <div>
                {
                    collages.map(collage => <AddmissionList
                        key={collage._id}
                        collage={collage}
                    >

                    </AddmissionList>)
                }
            </div>



        </div>
    );
};

export default Addmission;