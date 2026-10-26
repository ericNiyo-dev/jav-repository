import { useState } from "react";
import React  from "react";

function Counter(){

 const[counter,setCounter] =useState(0);

  function Increase(){
    setCounter(counter+5)
  }

  function Decrease(){
    setCounter(counter-5)
  }

  function Reset(){
    setCounter(0)
  }


    return(
    <div>
      <h2>Count:{counter}</h2>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </div>

    );
}

export default Counter;