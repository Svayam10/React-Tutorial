import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-700 p-4 text-black rounded-xl mb-4'>Tailwind Test</h1>
    <Card src='https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'username='bhoomi' btnText='Look at my profile'/>
    <Card src='https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'username='khushi' btnText='Click for profilee'/>
    </>
    
  )
}

export default App
