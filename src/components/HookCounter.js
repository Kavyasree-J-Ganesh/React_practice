import React, { useState } from 'react'

function HookCounter() {

    cost [Count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}



export default HookCounter