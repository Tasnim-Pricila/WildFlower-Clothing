import React from 'react';

const Review = (props) => {
    const {name, description, img, rating} = props.review;
    return (
        <div className='flex flex-col border p-10 rounded-lg h-[450px]'>
            <img src={img} alt="" className='w-[70px] h-[70px] rounded-full object-cover mx-auto'/>
            <p className='font-bold mt-8 mb-6'> {name} </p>
            <p className='mb-6'><b>Rating:</b> {rating} </p>
            <p> {description} </p>
        </div>
    );
};

export default Review;