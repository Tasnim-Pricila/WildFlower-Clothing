import React from 'react';
import useReview from '../../CustomHooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const[reviews, setReviews] = useReview();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-16 px-4 text-center items-start mb-16'>
            {
                reviews.map(review => 
                    <Review
                        key={review.id}
                        review = {review}
                        > 
                    </Review>)
            }
        </div>
    );
};

export default Reviews;