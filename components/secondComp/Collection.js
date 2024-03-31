import React from 'react'

const Collection = ({ theme, url, name, place, btn }) => {
    return (
        <div className={theme ? 'colItems w-[240px] h-full bg-[#3B3E47] mx-6 shadow-xl' : 'colItems w-[240px] h-full bg-white mx-6 shadow-xl'}>
            <img src={url}
                className='w-[220px] m-auto my-2 h-[430px] object-cover shadow-xl'></img>
            <div className='w-[200px] m-auto my-[15px] border-b-2 border-dashed border-slate-600'></div>

            <div className='w-[220px] m-auto text-center text-[14px]'>
                <p className='mb-[7px] font-semibold'>{name}</p>
                <p className='mb-[7px] '>OCT 15 | SUN | 4:30 PM</p>
                <p className={theme ? 'mb-[7px] text-[#DFDFDF]' : 'mb-[7px] text-slate-500'}>{place}</p>
                <button className='w-[200px] p-2 bg-[#1D1D1F] text-white'>{btn}</button>
            </div>
        </div>
    )
}

export default Collection
