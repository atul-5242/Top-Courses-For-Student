import React from 'react';

const Filter = ({filterData,setCategory}) => {
  

  const filterHandler = (title) => {
    setCategory(title)
  }
  return (
    <div className='flex gap-8 mx-auto justify-center'>
      <div  className='flex gap-8 mx-auto flex-wrap justify-center'>
      {
                filterData.map((data)=>{
                return (
                    <button onClick={()=>filterHandler(data.title)} key={data.id} className='p-2 bg-black text-white rounded-md'>
                        {data.title} 
                    </button>   )
            })
        }
      </div>
      
    </div>
  )
}

export default Filter