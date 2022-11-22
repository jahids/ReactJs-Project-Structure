import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import useSuperHero, { useAddSuperHeroData } from '../Hooks/useSuperHero';

const RQSuperHeroes = () => {

    // const Success = (data) => {
    //     console.log("perform data fetching ", data)
    // }
    // const Error = (error) => {
    //     console.log("perform side effect after ecountering error ", error)
    // }

//   const {isLoading, data, isFetching, refetchInterval, refetch} = useQuery(['super-heroes'], () => {
//         return axios.get('http://localhost:5000/superheroes')
        
//     }, 
    // {
    //     cacheTime : 1000, // kototkkon cache data dhore rakbe 
    // }
    // {
    //     onSuccess: Success,
    //     onError : Error
        // enabled : false  // eta use korle normal data fetch off thake jkn button tiger kora hobe tkn data fetch hobe
        //refetchOnWindowFocus : true // eta hole auto matic data fetch hoi windows te
        // staleTime : 0
        // refetchInterval: 1000 eta jotot dewa hobe totokkon por data fetch hobe
    // }
    // )
   

    // console.log("loading r por",isLoading, isFetching)

    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('')

    const Success = (data) => {
        console.log("perform data fetching ", data)
    }
    const Error = (error) => {
        console.log("perform side effect after ecountering error ", error)
    }
    const {isLoading, data, isFetching, refetchInterval, refetch} = useSuperHero(Success, Error,'http://localhost:5000/superheroes');
    // const data2 = useSuperHero(Success, Error,'https://jsonplaceholder.typicode.com/users');

    // console.log(data2)
     console.log(isLoading, isFetching)
    if(isLoading){
        <h2>Loading .... </h2>
    }

    const {mutate} = useAddSuperHeroData()

    const handleAddHeroClick = () => {
        console.log({name, alterEgo});
        const hero = {name, alterEgo}
        mutate(hero)
    }
    return (
        <div>
            <h2> i am a RQSuperHeroes</h2>

            <div>
                <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='alterego' value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
                <button onClick={handleAddHeroClick} >Add hero</button>
            </div>
            {
                data?.data.map((item, index)=>{
                return <div key={item.id}>{item.name}</div>
                })
            }

            {/* <button onClick={()=>{refetch()}} >fetch data</button> */}
        </div>
    );
};

export default RQSuperHeroes;
