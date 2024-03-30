import React from 'react'

const Ads = () => {
    return (
        <div className='w-[238px] h-[510px] bg-white shadow-xl relative' >
            <span className='text-white bg-black/50 px-4 absolute top-2 right-3' >Ad</span>
            <img src='https://images.unsplash.com/photo-1512144825472-b4d1e4cdeb68?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='w-[218px] h-[225px] object-cover m-auto mt-2' ></img>
            <div className='w-[218px] m-auto border-2'>
                <p className='p-3 mt-4 text-xl font-medium'>Advertisement title</p>
                <p className='p-3 mt-[-20px] text-[13px] text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

        </div>
    )
}

export default Ads
