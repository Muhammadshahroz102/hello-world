import { useState } from 'react'
import './App.css'

const Card = ({title}) =>{
  const [num, setNumber] = useState(false)
  return (
    <div>
    <h1>{title}</h1>
    <button onClick={ () => setNumber(!num)}>{num ? "state change" : "State Changed"}</button>
    </div>
  )

}

const App = () =>{
  return(
    <div>
    <h1>Arrow Function</h1>
    <Card title={ "This is the 2nd Card"}>
    </Card>
    {/* <Card title={ "Now This is the 3nd Card"}></Card> */}
    </div>
  )
}

export default App
