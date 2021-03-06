import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
    const {name, description, img, rating} = props.review;
    
    return (
        <>    
            <div className='flex flex-col border p-10 rounded-lg lg:h-[500px] shadow-xl hover:bg-indigo-400 hover:transition hover:duration-700 group'>

                <img src={img} alt="" className='w-[70px] h-[70px] rounded-full object-cover mx-auto border-4 border-orange-600' />
                <p className='font-bold mt-8 mb-6'> {name} </p>
                <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} style={{color: 'black'}}/>}
                        fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                        readonly> 
                </Rating>
                <p className='mb-6 text-red-900 mt-4 group-hover:text-white'><b>{rating}</b> </p>
                <p className='group-hover:text-white'> {`${description.length < 400 ? description : description.slice(0,400)}`} </p>

            </div>
            
        </>
        
    );
};

export default Review;