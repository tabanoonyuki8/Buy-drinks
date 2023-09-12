import { useEffect, useState } from "react";
import SomeBottle from "../SomeBottle/SomeBottle";
import "./Bottle.css"

const Bottles = () => {

const [bottles,setBottles]=useState([]);
useEffect(()=>{

    fetch("bottles.json")
    .then (res => res.json())
    .then (data => setBottles(data))
},[])


    return (
        <div>
             <h1>Some awsome bottle</h1>
             <h2>Bottle here: {Bottles.length}</h2>
             <div className="bottle-container">
                {
                    bottles.map(bottle => <SomeBottle key={bottle.id} bottle={bottle}></SomeBottle>)
                }
             </div>
        </div>
    );
};

export default Bottles;