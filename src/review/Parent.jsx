import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }
    return (
       <div>
        <h1>{count}</h1>
        <Child1 increment={increment} />
        <Child2 decrement={decrement} />
       </div>
    )

}

 export default Parent