import React from 'react'
import Card from './Card'
import Ads from './Ads'

const FirstComp = ({ theme }) => {
    return (
        <div className='max-w-[1250px] min-h-[673px] m-auto pt-[20px]'>
            <span className='head font-bold text-2xl py-2 border-b-2 border-blue-500' >Sports</span>
            <div className='cards flex flex-wrap justify-between my-[40px]'>
                <Card theme={theme} url={'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={"Sacramento River Cats"} />
                <Card theme={theme} url={'https://plus.unsplash.com/premium_photo-1661964390436-9ecfb46e3941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={'Las Vegas Aviator'} />
                <Card theme={theme} url={'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={"New Jersey Devils"} />
                <Card theme={theme} url={'https://plus.unsplash.com/premium_photo-1661964458132-60acf479c6c8?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={"Vegas Aviators"} />
                <Ads theme={theme} />
            </div>
            <div className='flex justify-center'>
                <button className='px-6 py-3 text-[13px] text-white font-bold bg-blue-400 rounded-md'>See More</button>
            </div>
        </div>
    )
}

export default FirstComp
