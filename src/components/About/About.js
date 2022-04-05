import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div className='lg:px-56 px-4'>
            <h1 className='text-purple-600 text-center text-5xl my-16'>About Us</h1>
           
            <p className='text-2xl text-center text-fuchsia-500 mb-8 font-semibold'>  Welcome To WildFlower Clothing </p>
            <p>
                <span className='text-6xl text-red-600'>W</span>ildFlower, a Professional E-commerce Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of E-commerce, with a focus on dependability and Clothing store. We're working to turn our passion for E-commerce into a booming online website. We hope you enjoy our E-commerce as much as we enjoy offering them to you.
            </p>
            <p className='mt-8'>
                I will keep posting more important posts on my Website for all of you. Please give your support and love.
            </p>
               
            <p className='mt-12 text-center text-blue-700 font-semibold'>
                Thanks For Visiting Our Site.
                <br/> <br/>
                Have a nice day ! <br/> <br/>
                <FontAwesomeIcon icon={faFaceSmile} style={{color: "purple", fontSize: "20px"}}></FontAwesomeIcon>
            </p>
                
                
          
        </div>
    );
};

export default About;