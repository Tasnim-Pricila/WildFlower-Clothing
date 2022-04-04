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
            <div className='flex md:flex-row flex-col items-center gap-x-36'>
                <div className='md:basis-1/2 md:pl-36 px-10 text-center md:text-left'>
                    <h1 className='text-6xl font-semibold leading-[4.5rem] text-fuchsia-400 uppercase'>
                        Make Yourself <br></br> The Unique One
                    </h1>
                    <p className='mt-8 text-xl mb-4 text-cyan-400 font-semibold'>
                        WildFlower Clothing, a brand of Bangladesh, has been a leading E-Commerce. 
                    </p>
                    <p>Marketplace in Bangladesh. Since it has been founded in 2000. </p>
                    <p>WildFlower gives sellers a flexible and comprehensive sales solution and buyers a tremendous and stylish selection of clothes at competitive prices. </p>
                    <button className='mt-8 py-4 px-8 border-4 rounded-lg border-fuchsia-400 font-semibold mb-4 text-xl hover:bg-fuchsia-400 hover:text-white hover:transition hover:duration-500 '>         
                        Explore More 
                    </button>
                </div>
                <div className='md:basis-1/2'>
                    <img src={fashion} alt="Girl with Stylish Dress" className='w-2/3 mx-auto md:mx-0' />
                </div>
            </div>
            <div>
                <h2 className='text-5xl my-16 text-center text-fuchsia-600 font-medium'>
                    What Our Customers Say !
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-16 px-4 text-center items-start mb-16'>
                    {
                        reviews.slice(0,3).map(review => 
                            <Review
                                key={review.id}
                                review = {review}
                                > 
                            </Review> )
                    }
                </div>
                <button className='mt-6  py-4 px-8 border-4 rounded-lg border-fuchsia-600 font-semibold mb-4 text-xl hover:bg-fuchsia-600 hover:text-white hover:transition hover:duration-500 mx-auto block' onClick={() => navigate('/reviews')}> 
                    See All Reviews 
                </button>
            </div>
        </>
        
    );
};

export default Home;