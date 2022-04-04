import React from 'react';
import error from '../../images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={error} alt="Errorimage" className='mx-auto w-[600px]' />
        </div>
    );
};

export default NotFound;