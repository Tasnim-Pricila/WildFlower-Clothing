import React from 'react';

const Review = (props) => {
    const {name, description, img, rating} = props.review;
    return (
        <div className='flex flex-col border p-10 rounded-lg lg:h-[450px] md:h-[550px] shadow-xl hover:bg-indigo-400 hover:transition hover:duration-700 '>
            <img src={img} alt="" className='w-[70px] h-[70px] rounded-full object-cover mx-auto border-4 border-orange-600'/>
            <p className='font-bold mt-8 mb-6'> {name} </p>
            <p className='mb-6'><b>Rating:</b> {rating} </p>
            <p className='hover:text-white'> {description} </p>
        </div>
    );
};

export default Review;