import React from 'react'
import ImageOne from '../img/d1.jpg'
import ImageTwo from '../img/d2.jpg'
import ImageThree from '../img/d3.jpg'


const Content = () => {
    return (
        <>
        <div className='menu-card'>
            <img src={ImageOne} alt='d1' className='h-full rounded mb-20 shadow' />
            <div className='center-content'>
            <h2 className='text-2xl mb-2'> good design</h2>
            <p className='mb-2'> a perfect desigh for ue website</p>
            </div>
        </div>
         <div className='menu-card'>
         <img src={ImageTwo} alt='d2' className='h-full rounded mb-20 shadow' />
         <div className='center-content'>
         <h2 className='text-2xl mb-2'> good design</h2>
         <p className='mb-2'> a perfect desigh for ue website</p>
         </div>
     </div>
     <div className='menu-card'>
         <img src={ImageThree} alt='d3' className='h-full rounded mb-20 shadow' />
         <div className='center-content'>
         <h2 className='text-2xl mb-2'> good design</h2>
         <p className='mb-2'> a perfect desigh for ue website</p>
         </div>
     </div>
     </>
    )
}

export default Content
