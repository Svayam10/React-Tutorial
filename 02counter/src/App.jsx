import './App.css'
import { useState } from 'react';

function App() {

  let [counter , setCounter] = useState(0)

  const addValue = () => {
    if(counter<20){
      setCounter(prevcounter => prevcounter+1)
      setCounter(prevcounter => prevcounter+1)
      setCounter(prevcounter => prevcounter+1)
    }else{
      console.log("Counter cannot increase above 20")
    }
  }

  const subValue = () => {
    if(counter>0){
      setCounter(counter-1) 
    }else{
      console.log("Counter cannot decrease below 0"); 
    }
  }

  return (
    <>
    <h1>Svayam Mehta</h1>
    <h2>Counter value: {counter} </h2>

    <button onClick={addValue}>Increase {counter}</button>
    <button onClick={subValue}>Decrease {counter}</button>
    </>
  )
}

export default App
