import { useState } from 'react';
import Watch from '../Watch/Watch';
import './Sunglass.css'
import { useEffect } from 'react';

const Sunglass = () => {

const [watches,setWatches]=useState([]);
useEffect(()=>{
    fetch('watches.json')
    .then (res => res.json())
    .then (data => setWatches(data))
},[])



    // const watches=[
    //     {
    //         id:1, name: "Apple watch" ,price:15000
    //     },
    //     {
    //         id:2, name: "Samsung watch" ,price:13000
    //     },
    //     {
    //         id:1, name: "Oppp watch" ,price:10000
    //     }
       
    // ];
    // const watches=[
    //     {
    //       "id": 1,
    //       "name": "Smartwatch Model A",
    //       "price": 199.99
    //     },
    //     {
    //       "id": 2,
    //       "name": "Smartwatch Model B",
    //       "price": 149.99
    //     },
    //     {
    //       "id": 3,
    //       "name": "Smartwatch Model C",
    //       "price": 249.99
    //     },
    //     {
    //       "id": 4,
    //       "name": "Smartwatch Model D",
    //       "price": 179.99
    //     },
    //     {
    //       "id": 5,
    //       "name": "Smartwatch Model E",
    //       "price": 299.99
    //     }
    //   ];
    return (
        <div>
   
        
            {
                watches.map(watch =>
                    <Watch key={watch.id} watch={watch}></Watch>
                )
            }
        </div>
    );
};

export default Sunglass;