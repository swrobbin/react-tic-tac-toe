import React from 'react'
import Square from './Square'

const Board = ({ squares, onClick}) => {


  return (
    <div>
        <Square value="1" onClick={() => onClick("dummy val")} />
        <Square value="2" onClick={() => onClick("dummy val")} />
        <Square value="3" onClick={() => onClick("dummy val")} />
        <Square value="4" onClick={() => onClick("dummy val")} />
        <Square value="5" onClick={() => onClick("dummy val")} />
        <Square value="6" onClick={() => onClick("dummy val")} />
        <Square value="7" onClick={() => onClick("dummy val")} />
        <Square value="8" onClick={() => onClick("dummy val")} />
        <Square value="9" onClick={() => onClick("dummy val")} /> 

    </div>
  )
}

export default Board