import React from 'react';

const Reviews = () => {
    return (
        <div className='pt-5'>

            <h1 className="text-center text-3xl font-semibold">Collage Reviews</h1>

            <div className="pt-8">
                <ul className='space-y-5 '>

                    <li className='bg-green-800 flex px-10 py-3 gap-5 items-center'>
                        <img className="h-30 bg-base-100 rounded-box w-24" src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                        <div className=' space-y-5'>
                            <h1 className='font-semibold'>Comment: </h1>
                            <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus modi sunt minima maxime, minus dolores pariatur sequi quasi est et voluptatum nobis cupiditate facilis obcaecati expedita reprehenderit officiis praesentium laborum.</p>
                            <div className='flex justify-between'>
                                <p>Sujan Ahammad</p>
                                <p>Date: 25-July-2023</p>
                            </div>
                        </div>
                    </li>
                    {/*  */}
                    <li className='bg-green-800 flex px-10 py-3 gap-5 items-center'>
                        <img className="h-30 bg-base-100 rounded-box w-24" src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                        <div className=' space-y-5'>
                            <h1 className='font-semibold'>Comment: </h1>
                            <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus modi sunt minima maxime, minus dolores pariatur sequi quasi est et voluptatum nobis cupiditate facilis obcaecati expedita reprehenderit officiis praesentium laborum.</p>
                            <div className='flex justify-between'>
                                <p>Sujan Ahammad</p>
                                <p>Date: 25-July-2023</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Reviews;