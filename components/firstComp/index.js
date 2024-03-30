import React from 'react'
import Card from './Card'
import Ads from './Ads'

const FirstComp = () => {
    return (
        <div className='w-[1250px] h-[673px] m-auto mt-[40px]'>
            <span className='font-bold text-2xl py-2 border-b-2 border-blue-500' >Sports</span>
            <div className='flex justify-between my-[40px]'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Ads />
            </div>
            <div className='flex justify-center'>
                <button className='px-6 py-3 text-[13px] text-white font-bold bg-blue-400 rounded-md'>See More</button>
            </div>
        </div>
    )
}

export default FirstComp
