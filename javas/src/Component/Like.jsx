import React from "react";
import { useState } from "react";

function Like(){

    const [Like,setLike] =useState(0);

    function like(){
        setLike=(Like+1)
    }

    function Unlike(){
        setLike=(-1)
    }

    return(

        <div>
            <h2>likes:{Like}</h2>
            <button onClick={like}>like</button>
            <button onClick={Unlike}>Unlike</button>
        </div>


    );
}

export default Like;