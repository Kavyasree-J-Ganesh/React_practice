import React from "react";

// with jsx
// const Hello =() => {
//     return (
//         <div>
//             <h1>Hello Kavya</h1>
//         </div>
//     )
// }


// without jsx
const Hello = () => {
return React.createElement('div', {id : 'hello', className:'dummyClass'}, React.createElement('h1', null, 'Hello Kavya'))
}


export default Hello