import React from 'react';
import './App.css';
import {useState, useEffect} from "react";


const App=()=>{
  const [emotion,setEmotion] = useState("happy");
  const[secondary,setSecondary] = useState("tired");
  useEffect(()=> {
    console.log( `it's ${emotion} around here!`);
  }, [emotion]); //it'll log just emotion

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  },[secondary]); //it'll log just secondary

 //suppose to log just secondary or emotion but is logging both
  return (
    <>
    <h1>Current emotion is {emotion} and {secondary}.</h1>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    <button onClick={() => setEmotion("happy")}>Make happy</button>
    <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
    </>
  )


  

}
export default App;
