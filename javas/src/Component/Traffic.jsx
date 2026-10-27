import React from "react";
import { useState } from "react";


function Traffic(){

    const[light,setLight] =useState("Red");

    function Red(){

        if(light==Red){
            setLight("Go")
        }

        else if(light==Yellow){
            setLight("Get ready")
        }

        else {
            setLight("Go")
        }
        
    }

    function Yellow(){
        setLight("yellow")
    }

    function Green(){
        setLight("green")
    }

    return(
       <div>

        <h3>Traffic Light Simulator:</h3>
        <button onClick={Red}>Red</button>
        <button onClick={Yellow}>Yellow</button>
        <button onClick={Green}>Green</button>
       </div>

    );
}

export default Traffic;