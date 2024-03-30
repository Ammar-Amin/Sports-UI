import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Collection from './Collection'

const SecondComp = () => {
    return (
        <div className='w-[1240px] h-[918px] m-auto mt-[50px] border'>
            <div className='w-[1085px] h-[800px] m-auto mt-[60px] border'>
                <h1 className='font-bold text-[50px] text-center'>Collection Spotlight</h1>
                <p className='text-[14px] text-center w-[900px] m-auto'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                <div className='h-[625px] mt-[40px] flex justify-between'>
                    <div className='my-[300px]' >
                        <i class="ri-arrow-left-s-line text-2xl px-2 py-3 border-2 border-blue-500 text-blue-500 cursor-pointer"></i>
                    </div>

                    <div className='flex'>
                        <Collection />
                        <Collection />
                        <Collection />
                    </div>

                    <div className='my-[300px]' >
                        <i class="ri-arrow-right-s-line text-2xl px-2 py-3 border-2 border-blue-500 text-blue-500 cursor-pointer"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SecondComp
