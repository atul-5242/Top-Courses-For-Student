import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import Loader from './components/Loader';

import {filterData,apiUrl} from './data';

function App(){



  const [courses,setCourses] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title)

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        setLoading(true)
        const result = await fetch(apiUrl);
        const output = await result.json();
        setLoading(false);
        // Save the data into variable.
        setCourses(output.data);

      } catch (error) {
        toast.error("Error Happing");
      }
    }
  
      fetchData();
    },[])

  // const notify = () => toast("Wow so easy!");

  return (
    <div >
      
         
    <div>
    <NavBar></NavBar>
        <Filter filterData={filterData}
                  setCategory={setCategory}></Filter>
                  {
                      isLoading?<Loader/>:null
                  }
          <Cards courses={courses} category={category}></Cards>

</div>



      <ToastContainer />

    </div>
  );
}

export default App;
