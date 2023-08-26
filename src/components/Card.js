import React, { useState } from 'react'
import { FcLikePlaceholder,FcLike } from 'react-icons/fc';
import { toast } from 'react-toastify';
const Card = ({course}) => {
  // console.log(course)
  const [liked,setLiked] =useState(false)
  const likedHandler = () => {
    if(liked){
      
        setLiked(!liked)
        toast.warn("Unliked course");
      
    }
    else{
    setLiked(!liked)
    toast.success("Liked course");
    }
  }
 
  return (
    <div className='lg:w-96  bg-zinc-100 rounded-lg md:w-[30%] w-[100%] border border-black p-4 border-opacity-20 '>
      <div  className=''>
        <img src={course.image.url} alt="" className=' lg:w-96 w-82 z-0' />
              <button onClick={likedHandler} className='flex mx-auto  mr-0'>

{
    (liked)?<FcLike className=' Z-[100] transform scale-[200%] -translate-y-2'/>:<FcLikePlaceholder className=' Z-[100] transform scale-[200%] -translate-y-2'/>
}
    
      </button>
      </div>

      <div className='lg:w-96 w-40'>
          <div className=' text-violet-500 font-bold'>
            {course.id}
          </div>
          <div className='text-lg font-semibold'>
            {course.title}
            <div className='bg-violet-500 h-[2px] w-[90%] flex '></div>
          </div>
          <div className=' text-gray-800 lg:w-80 w-[100%]'>
            {course.description}
          </div>
          
      </div>
     
    </div>
  )
}

export default Card