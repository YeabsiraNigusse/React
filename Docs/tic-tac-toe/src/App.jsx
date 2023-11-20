import { useState } from "react"

export function Square(){

  const [val, setVal] = useState(null)
  function handClick(){
    setVal('X')
  }
  return(<button onClick={handClick} className="square">{val}</button>)
}

export default function App(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>

    <div className="board-row">
       <Square/>
       <Square/>
       <Square/>
    </div>

    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>
    
    </>
  )
}