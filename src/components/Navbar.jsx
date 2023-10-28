import React, { useState } from 'react'
import { useSearchContext } from '../contexts/searchContext'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillImageFill } from 'react-icons/bs'

export default function Navbar() {

  const [searchInput, setSearchInput] = useState('')
  const [search, setSearch] = useSearchContext()


  return (
    <nav className='bg-gray-300 w-[100%] h-[80px] sm:h-[50px] px-14 flex flex-col sm:flex-row items-center fixed z-10 text-indigo-700 justify-center sm:justify-between pb-1'>
      <div className='flex gap-3 justify-center align-bottom'>
        <BsFillImageFill className='text-[35px]' />
        <h1 className='font-bold sm:text-xl mt-[2px] cursor-pointer' onClick={() => location.reload()}>ImageGallery</h1>
      </div>
      <div className='flex text-center gap-3 pt-1'>
        <input className='w-70 h-[30px] rounded-md px-5  text-indigo-600 outline-none' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyUp={(e) => { if (e.key == 'Enter') { setSearchInput(''); setSearch(searchInput); } }} placeholder='Search photo..' />
        <button className='bg-indigo-600 p-2 px-[9px] rounded-[100%] mt-[-2px] text-white hover:bg-indigo-700 active:text-yellow-200 active:bg-indigo-500 outline-none ' onClick={() => { setSearchInput(''); setSearch(searchInput); }}>
          <AiOutlineSearch />
        </button>
      </div>
    </nav>
  )
}
