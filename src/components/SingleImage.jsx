import React, { useEffect, useRef, useState } from 'react'
import {MdCancel} from 'react-icons/md'
import {FiDownload} from 'react-icons/fi'
import {MdOutlineDownload} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx'
import {HiOutlineDownload} from 'react-icons/hi'

export default function SingleImage({photo}) {

  const [singlePhoto, setSinglePhoto] = photo
  const [frameAnimationToggle, setFrameAnimationToggle] = useState(true)

  return (
    <div className={`fixed w-[100%] h-[100%] backdrop-blur-sm bg-[rgba(0,0,0,.2)] z-30 flex  justify-center items-center ${frameAnimationToggle ? 'fade-in' : 'fade-out'}`}>
        <div className={`flex items-start scale-100 mr-10 flex-row ml-10 ${frameAnimationToggle ? 'expand' : 'shrink'}`} >
          <img src={singlePhoto.src} />
          <div className='flex flex-col gap-4 sm:ml-3 ml-[-35px]' >
          <button className='text-[32px]' onClick={()=>{
                setFrameAnimationToggle(false)
                setTimeout(()=>{
                  setSinglePhoto(null)
                },[500])
            }} ><MdCancel/></button>
          <button className='text-[30px]'><a href={singlePhoto.src} target='_blank' download ><HiOutlineDownload/></a></button>
          </div>
        </div>
    </div>
  )
}
