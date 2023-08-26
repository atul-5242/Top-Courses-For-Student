import React from 'react'
import Card from './Card';
const Cards = ({courses,category}) => {


  // console.log(courses['Development'])
    let allCourses = [];
    // return you a list of all courses recevied from the api response.
    const getCourses = () =>{
        if(category==='All'){
          Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        
        return allCourses;
      }
      else{
        return courses[category];
      }
    }



 
    

  return (
    <div className='flex 
    lg:flex-row md:flex-row flex-col  flex-wrap lg:w-[55rem] md:w-[55rem] w-[20rem] mx-auto gap-8 mt-20 justify-center shadow-black drop-shadow-lg'>
      {
       getCourses().map((course)=>{
        return  ( <Card key={course.id} course={course}></Card>)
        })
      }


    </div>
  )
}

export default Cards