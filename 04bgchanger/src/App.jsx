import { useState } from "react"

function App() {
const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2.5 py-1.5 rounded-xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={() => {setColor('red')}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={() => {setColor('green')}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={() => {setColor('blue')}}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={() => {setColor('pink')}}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lavender"}} onClick={() => {setColor('lavender')}}>Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}} onClick={() => {setColor('purple')}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App


//Always pass a function to onClick function thats why we passed a callback function 