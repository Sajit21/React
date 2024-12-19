import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  { useRef } from 'react';
import './App.css'
// import Card from './component/card'
 function Main(props) {
    return (
        <div >
            <Header msg={props.msg} />
        </div>
    )
 }

 function  Header(props){
    return (
        <div style={{ border: "10px solid red" }}>
            <p>
                Header yeta cha
            </p>
            <Wrapper msg={props.msg}  />
        </div>
    )
 }
 
 function Wrapper(props){
    return (
        <div style={{ border: "20px solid orange"
            
         }}> 
            <p>
            wrapper yeta cha
            </p>
            <Button msg={props.msg}  />
        </div>
    )
 }
 
 function Button(props){
    return(
        <div style={{ border: "30px solid purple" }}>
            <p>Button yeta cha</p>
       
        <button onClick={()=>
            alert(props.msg)

         } >Yeta thich!</button>
        </div>
    )
 }

 function App(){
    return (

        <div>
           <Main  msg="this is the main component" />
        </div>
    )
 }
   

export default App
