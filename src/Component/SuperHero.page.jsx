import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SuperHero = () => {
  const [loading, setloading] = useState(true);
  const [newdta, setnewdata] = useState();

  useEffect(()=>{
    axios.get('http://localhost:5000/superheroes')
    .then((res)=>{
        setnewdata(res.data);
        setloading(false)
    })
  },[])

  if(loading){
    return <h2>loading</h2>
  }


    return (
        <div>
            <h2>SuperHero page</h2>
            {
               newdta.length > 0 && newdta.map((item, index)=>{
                    return <div key={item.id}> {item.name}</div>
                })
            }
        </div>
    );
};

export default SuperHero;