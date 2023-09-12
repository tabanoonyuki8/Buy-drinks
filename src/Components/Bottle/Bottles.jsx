import { useEffect, useState } from "react";
import SomeBottle from "../SomeBottle/SomeBottle";
import "./Bottle.css"

const Bottles = () => {

const [bottles,setBottles]=useState([]);
const [cart,setCart]=useState([]);

useEffect(()=>{

    fetch("bottles.json")
    .then (res => res.json())
    .then (data => setBottles(data))
},[])
const handleBottle =(bottle)=>{
    const newCart=[...cart,bottle];
    setCart(newCart);
}

    return (
        <div>
             <h1>Some awsome bottle</h1>
             <h2>Bottle Avaiable: {bottles.length}</h2>
             <h4>Cart :: {cart.length}</h4>
      
             <div>
                <ul>
                    {
                        cart.map(bottle =>
                        <ol key={bottle.is}>{bottle.name} <br/> <h5>Total price:{bottle.price}</h5>
  </ol> 
                            
                            )
                    }
                </ul>
             </div>
             <div className="bottle-container">
                {
                    bottles.map(bottle => <SomeBottle key={bottle.id} 
                        handleBottle={handleBottle} 
                        bottle={bottle}></SomeBottle>)
                }
             </div>
        </div>
    );
};

export default Bottles;