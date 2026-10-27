import React from "react";
import { useState } from "react";

function Like(){

    const [like,setLike] =useState(0);

    function Like(){
        setLike(like+1)
    }

    function Unlike(){
        setLike(like-1)

        if(like<=0){
           setLike(0)
        }
    }

    return(

        <div>
            <h2>likes:{like}</h2>
            <button onClick={Like}>Like</button>
            <button onClick={Unlike}>Unlike</button>
        </div>


    );
}

export default Like;