import React from 'react'

const Card = ({ url, name, theme }) => {
    return (
        <div className={theme ? 'w-[238px] h-[510px] bg-[#3B3E47] shadow-xl' : 'w-[238px] h-[510px] bg-white shadow-xl'} >
            <img src={url}
                className='w-[218px] h-[385px] object-cover m-auto mt-2' ></img>
            <p className='m-2 font-medium'>{name}</p>
            <div className={
                theme ? 'h-[65px] w-[218px] m-auto flex bg-[#292B32]' : 'h-[65px] w-[218px] m-auto flex bg-[#F7F7F8]'
            }>
                <div className='mx-[10px] my-2'>
                    <p className={theme ? 'text-[13px] text-[#DFDFDF]' : 'text-[13px] text-slate-700'}>Total Events</p>
                    <p className='font-medium text-[14px]'>48 Events</p>
                </div>
                <div className='mx-[10px] my-2'>
                    <p className={theme ? 'text-[13px] text-[#DFDFDF]' : 'text-[13px] text-slate-700'}>Sports</p>
                    <p className='font-medium text-[14px]'>BaseBall</p>
                </div>
            </div>
        </div>
    )
}

export default Card
