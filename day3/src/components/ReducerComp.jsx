import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

const initialValue = { count:0}

const reducer = (state, action)=>{
    switch(action.type){
        case "Increment":
            return { count:state.count+1}
            case "Decrement":
            return { count:state.count-1}
            case "RESET":
                return { count: 0}
            default:
                return state;
    }
}
const ReducerComp = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type: "Increment"})}>Increament</button>
        <button onClick={()=> dispatch({type: "Decrement"})}>Decrement</button>
        <button onClick={()=> dispatch({type: "Nothing"})}>Not Declare</button>
        <button onClick={()=> dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default ReducerComp