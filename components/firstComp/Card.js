import React from 'react'

const Card = () => {
    return (
        <div className='w-[238px] h-[510px] bg-white shadow-xl' >
            <img src='https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='w-[218px] h-[385px] object-cover m-auto mt-2' ></img>
            <p className='m-2 font-medium'>Sacramento River Cats</p>
            <div className='h-[65px] w-[218px] m-auto flex bg-[#F7F7F8]'>
                <div className='mx-[10px] my-2'>
                    <p className='text-[13px] text-slate-700'>Total Events</p>
                    <p className='font-medium text-[14px]'>48 Events</p>
                </div>
                <div className='mx-[10px] my-2'>
                    <p className='text-[13px] text-slate-700'>Sports</p>
                    <p className='font-medium text-[14px]'>BaseBall</p>
                </div>
            </div>
        </div>
    )
}

export default Card
