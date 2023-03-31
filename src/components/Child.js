import React from "react";

const Child = (props) => {

 const click = () => {
    console.log(props.message)
 }

    return (
        <div>
            <button onClick={click}>Click me</button>
        </div>
    )
}


export default Child