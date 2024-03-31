import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Collection from './Collection'

const SecondComp = ({ theme }) => {
    return (
        <div className={theme ? 'secComp max-w-[1240px] min-h-[918px] m-auto mt-[60px] border-[0.5px] border-slate-900 bg-[#18282A]' : 'SecComp max-w-[1240px] h-[918px] m-auto mt-[60px] border-[0.5px] border-white'}>
            <div className='max-w-[1085px] min-h-[800px] m-auto mt-[60px]'>
                <h1 className='font-bold text-[50px] text-center'>Collection Spotlight</h1>
                <p className='text-[14px] text-center max-w-[900px] m-auto'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                <div className='h-[625px] mt-[40px] flex justify-between'>
                    <div className='my-[300px]' >
                        <i class="ri-arrow-left-s-line text-2xl px-2 py-3 border-2 border-blue-500 text-blue-500 cursor-pointer"></i>
                    </div>

                    <div className='collection flex'>
                        <Collection theme={theme} name={'Las Vegas Aviators'} place={'Las Vegas Ballpark, Las Vegas, Nevada'} btn={'Take Flight Collection'}
                            url={'https://images.unsplash.com/photo-1566579090262-51cde5ebe92e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJ1Z2J5fGVufDB8fDB8fHww'} />
                        <Collection theme={theme} name={'Sacramento Rivers Cat'} place={'Sutter Health Park, Sacramento, California'} btn={'Orange'}
                            url={'https://images.unsplash.com/photo-1490108474814-221f6198acc5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                        <Collection theme={theme} name={'Las Vegas Aviators'} place={'Las Vegas Ballpark, Las Vegas, Nevada'} btn={'Take Flight Collection'}
                            url={'https://images.unsplash.com/photo-1566579090262-51cde5ebe92e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJ1Z2J5fGVufDB8fDB8fHww'} />
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
