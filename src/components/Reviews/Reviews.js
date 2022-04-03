import React from 'react';
import useReview from '../../CustomHooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const[reviews, setReviews] = useReview();

    return (
        <div className='grid grid-cols-3 gap-10 px-16 text-center'>
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