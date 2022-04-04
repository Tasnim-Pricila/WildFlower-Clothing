import React from 'react';
import quesOne from '../../images/quesOne.jpg'
import quesTwo from '../../images/quesTwo.jpg'
import quesThree from '../../images/quesThree.jpg'

const Blogs = () => {
    return (
        <div className='px-56 flex flex-col gap-12 my-24'>  
            <div className='grid grid-cols-3 gap-6 border shadow'>
                <div className='p-6'>
                    <img src={quesOne} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='col-span-2 p-6'>
                    <h1 className='text-2xl mb-6  text-violet-600 font-bold'>
                        1.  What is Context API ?
                    </h1>
                    <p className='text-xl'>
                        Context API is a react structure that helps us to reduce pop drilling from all over the components. In React JS, we pass data between components through the "props". But Context API is a built-in React tool that provides a way to pass data between the components without having too much problem passing props through all levels of the tree. At first, we have to create a Context. Then we have to create a provider for the Context. And lastly, use the Context in the specific components.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6 border shadow'>
                <div className='p-6'>
                    <img src={quesTwo} alt="" className='w-full h-full object-contain' />
                </div>
                <div className='col-span-2 p-6'>
                    <h1 className='text-2xl mb-6  text-violet-600 font-bold'>
                        2. What is Semantic Tag? 
                    </h1>
                    <p className='text-xl'>
                        Semantic Tag describes the browser and the developer clearly what they are supposed to do. It helps the browser to understand the meaning of the content before displaying it. Examples of semantic tags are nav, article, header, footer, summary, code, etc. Text with a 'code' tag is easily recognized by the browser as a type of coding text. Semantic Tags help in SEO.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6 border shadow'>
                <div className='p-6 flex items-center'>
                    <img src={quesThree} alt="" className='h-80 object-contain' />
                </div>
                <div className='col-span-2 p-6'>
                    <h1 className='text-2xl mb-6  text-violet-600 font-bold'>
                        3. Difference between Inline, Inline-block and Block Elements. 
                    </h1>
                    <p className='text-xl'>
                        <b> Inline: </b>
                        <p>
                            It dose not starts from a new line and occupy only the space bounded by the tags defining the elements. We can not set height and width in inline elements. Inline elementts accepts only left and right margins.
                        </p>
                        <b> Inline-block: </b>
                        <p>
                            It dose not starts from a new line. But we can set height and width in inline-block elements. It accepts all the margins. 
                        </p>
                        <b> Block: </b>
                        <p>
                            It starts from a new line and occupy the full width. We can set height and width in block elements. It accepts all the margins. 
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;