import React from 'react'

// function Greet(){
//     return <h1>New Greeting</h1>
// }
const Greet =(props) =>{
    console.log(props);
    return <h1>New {props.name}</h1>
}
export default Greet;