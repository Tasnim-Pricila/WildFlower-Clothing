import React from 'react';

const Review = (props) => {
    const {name, description, img} = props.review;
    return (
        <div className='flex flex-col items-center justify-center border p-10 rounded-lg'>
            <img src={img} alt="" className='w-[70px] h-[70px] rounded-full object-cover mx-auto'/>
            <p className='font-bold mt-8 mb-6'> {name} </p>
            <p> {description} </p>
        </div>
    );
};

export default Review;