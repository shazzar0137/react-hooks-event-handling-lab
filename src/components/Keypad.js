// Code Keypad Component Here
import React from "react";
function Keypad (){
    function handleChange(event){
        console.log("Entering password...");
    }
    return (
        <div>
            <input type= "password" onChange= {handleChange} >
            </input>
        </div>
    )
    
}
console.log("Entering password...")

export default Keypad;