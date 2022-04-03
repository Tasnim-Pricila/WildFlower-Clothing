import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../CustomHooks/useReview';
import fashion from '../../images/fashion.jpg'
import Review from '../Review/Review';


const Home = () => {

    const[reviews, setReviews] = useReview();
    const navigate = useNavigate();

    return (
        <>
            <div className='flex items-center gap-x-36'>
                <div className='basis-1/2 pl-36'>
                    <h1 className='text-6xl font-semibold leading-[4.5rem] text-fuchsia-400'>Make Yourself <br></br> The Unique One</h1>
                    <p className='mt-8 text-xl'>WildFlower Clothing, a brand of Bangladesh, has been a leading e-commerce. </p>
                    <p>Marketplace in Bangladesh. Since it has been founded in 2000. </p>
                    <button className='mt-8 py-6 px-8 bg-yellow-200 font-semibold'> Explore More </button>
                </div>
                <div className='basis-1/2'>
                    <img src={fashion} alt="Girl with Stylish Dress" className='w-2/3' />
                </div>
            </div>
            <div>
                <h2 className='text-5xl my-16 text-center'>What Our Customers say !</h2>
                    <div className='grid grid-cols-3 gap-10 px-16 text-center'>
                        {
                            reviews.slice(0,3).map(review => 
                                <Review
                                    key={review.id}
                                    review = {review}
                                    > 
                                </Review> )
                        }
                    </div>
                    <button className='mt-8 mb-16 py-4 px-8 bg-yellow-200 font-semibold mx-auto block' onClick={() => navigate('/reviews')}> See All Reviews </button>
            </div>
        </>
        
    );
};

export default Home;