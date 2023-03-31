import React from 'react'

const Child1 = (props) => {

    return (
        <div>
            <button onClick={props.increment}>Increment</button>
        </div>
    )
}

export default Child1