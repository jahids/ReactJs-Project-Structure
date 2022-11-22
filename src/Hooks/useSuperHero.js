import { useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useSuperHero = ({Error, Success}) => {
    
     return useQuery(['super-heroes'], () => {
        return axios.get('http://localhost:5000/superheroes') 
    },{
        onSuccess : Success,
        onError : Error
    })
};

// post request
const addSuperHero = (hero) => {
return axios.post('http://localhost:5000/superheroes', hero)
 
}

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero,{
        onSuccess : () =>{
            // data post hwoar sate sate auto update howar jonno use kora hoice
            queryClient.invalidateQueries('super-heroes')
        }
    })
}

export default useSuperHero;