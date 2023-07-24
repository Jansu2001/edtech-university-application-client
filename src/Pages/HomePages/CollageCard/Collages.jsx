import React from 'react';

import useAllCollages from '../../../Hooks/useAllCollages';
import HomeCollageCard from './HomeCollageCard';

const Collages = () => {

    const [collages] = useAllCollages()

    console.log(collages);

    const homeCard = collages.slice(0, 3)

    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-5">

                {
                    homeCard.map(collage => <HomeCollageCard
                        key={collage._id}
                        collage={collage}
                    >

                    </HomeCollageCard>)
                }

            </div>

        </div>
    );
};

export default Collages;