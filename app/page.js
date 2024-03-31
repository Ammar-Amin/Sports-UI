'use client'
import FirstComp from '@/components/firstComp'
import SecondComp from '@/components/secondComp'
import React, { useEffect, useState } from 'react'

export default function Home() {
  let [theme, setTheme] = useState(false)

  function handleClick() {
    setTheme(!theme)
  }

  return (
    <div className={theme ? 'w-full h-[100%] bg-[#292B32] text-white pb-[80px]' : 'w-full h-[100%] bg-slate-50 pb-[80px]'}>
      <button onClick={() => handleClick()}
        className='w-full py-2 px-8 bg-slate-600 text-white font-bold cursor-pointer'>Change Theme</button>
      <FirstComp theme={theme} />
      <SecondComp theme={theme} />
    </div>
  )
}
