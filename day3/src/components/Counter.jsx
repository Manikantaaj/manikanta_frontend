import React, { useState } from 'react'

let Counter = () => {
    let[count, setCount] = useState(10)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increament</button>
        <button onClick={()=> setCount(count+10)}>Increament+10</button>
        <button onClick={()=> setCount(count-1)}>Decreament</button>
        <button onClick={()=> setCount(count=10)}>Reset</button>
    </div>
  )
}
export default Counter
