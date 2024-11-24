import {useEffect, useState} from 'react';
import Sheamer from './Sheamer';
import OnMind from './OnMind';
import RestaurantCards from './RestaurantCards';
import { fetchData } from '../services/useFetch';
const Body = () =>{
      const [restData, setRestData] = useState({ 
        resCards: [], 
        onMindData: [], 
        cardHead: "", 
        onMindTitle: "" 
      });
      const [filterRestData, setFilterRestData] = useState({});

      useEffect(() => {
        const fetchAndSetData = async () => {
          const fetchedData = await fetchData();
          setRestData(fetchedData);
          setFilterRestData(fetchedData);
        }

        fetchAndSetData(); 
      }, []); 
      // console.log(restData)
      return (restData.resCards.length==0)?
        (
            <Sheamer/>
        ):(
            <div className='flex flex-col items-center pt-28'>
                <input 
                    className='text-center border-2 rounded-md w-1/3 py-2' 
                    type='text' 
                    placeholder={filterRestData.onMindTitle}
                    onChange={(e)=>{
                        // console.log(restData.resCards)
                        const filterResList = restData.resCards.filter((re)=> re.name.toLowerCase().includes(e.target.value.toLowerCase()))
                        setFilterRestData({
                          ...restData,
                          resCards:filterResList
                        })
                    }}
                />
                {/* <OnMind onMindData={filterRestData.onMindData} onMindTitle={filterRestData.onMindTitle}  /> */}
                <RestaurantCards restData={filterRestData.resCards} cardHead={filterRestData.cardHead}/>
            </div>
        )
}

export default Body;