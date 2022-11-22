import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
const fetchsuperHeros = () => {
    return axios.get('http://localhost:5000/superheroes');
}

const fetchjson = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

const ParalelQuraies = () => {

const {data : superheros} = useQuery({ queryKey:['super-heroes'], queryFn: fetchsuperHeros});
const {data : json} =useQuery({ queryKey :['jsondami'], queryFn: fetchjson});

console.log('json', json)
console.log('superheros', superheros);
    return (
        <div>
            <h2>this is a pralel quaries</h2>
        </div>
    );
};

export default ParalelQuraies;