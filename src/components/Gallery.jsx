import { useEffect, useState } from 'react'
import { useSearchContext } from '../contexts/searchContext';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import SingleImage from './SingleImage';
import pexels from '../api'

let pageNumber = 1

export default function Gallery() {

  const [photoUrls, setPhotosUrls] = useState([...new Array(15).fill(1)])
  const [search] = useSearchContext()
  const [singlePhoto, setSinglePhoto] = useState(null)

  useEffect(()=>{
      pageNumber = 1
      fetchPhotos()
  },[search])


  const fetchPhotos=()=>{
      try {
        if(search.length<3){
          pexels.get('https://api.pexels.com/v1/curated?page='+pageNumber).then(res => setPhotosUrls(res.data.photos.map(photo=>({id: photo.id, src: photo.src.large, width: photo.width, height: photo.height, name: photo.alt}))));
        }else{
          pexels.get(`https://api.pexels.com/v1/search?query=${search}&page=${pageNumber}`).then(res => setPhotosUrls(res.data.photos.map(photo=>({id: photo.id, src: photo.src.large, width: photo.width, height: photo.height, name: photo.alt}))));
        }
      } catch (e) {
          console.error(e);
      }
  }

  const handlePage=(direction=1)=>{
    const newPage = pageNumber+direction
    pageNumber = newPage<0 ? 1 : newPage
    fetchPhotos()
  }


  return (
    <>
    <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {photoUrls.map((photoUrl)=><div className='bg-[gray] w-40 h-40 sm:w-50 sm:h-50 md:w-[200px] md:h-[200px] lg:w-60 lg:h-60  rounded-lg overflow-hidden cursor-pointer hover:opacity-[.95] transition-opacity' onClick={()=>setSinglePhoto(photoUrl)} key={photoUrl.id}>
          <img src={photoUrl.src} className='object-cover h-[inherit] w-[inherit] unblur hover:scale-125 transition-all duration-1000' />
        </div>)}
    </div>
    <div className='mb-10 mt-20 flex items-center gap-5'>
          <button className='bg-indigo-600 p-3 text-white rounded-[100%]' style={{opacity: pageNumber<=1 ? '.5' : '1'}} onClick={()=>handlePage(-1)}><IoIosArrowBack/></button>
            <h1 className='font-semibold'>{pageNumber}</h1>
          <button className='bg-indigo-600 p-3 text-white rounded-[100%] hover:bg-indigo-700 active:bg-indigo-500 active:text-yellow-300 ' onClick={()=>handlePage(1)}><IoIosArrowForward/></button>
    </div>
    {
      singlePhoto==null ? '' : <SingleImage photo={[singlePhoto, setSinglePhoto]} />
    }
    </>
  )
}
