import { useState } from "react";
import React from "react";



function Password(){


    const[showPassword,setPassword] =useState("password");
      
    
    function Show(){
        setPassword("text")
        
    }

    function Hide(){

        setPassword("password")
    }

    return(
        <div>
            <label for="">Password</label>
            <input type={showPassword}></input>
            <button onClick={Hide}>Hide</button>
           <button onClick={Show}>Show</button>
        </div>

    );
}

export default Password;