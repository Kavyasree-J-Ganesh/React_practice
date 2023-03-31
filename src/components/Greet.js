 import React from 'react'

 // function Greet(){
 //  return <h1>Hello Kavya</h1>
 //}


//  const Greet = (props) =>{
//     return <h1>Hello Kavya </h1>
//  }


// without destructuring
// const Greet = props => {
// console.log(props)
// return (
//   <div>
//     <h1>
//         Hello {props.name} is my {props.relation}
//     </h1>
//     {props.children}
//   </div>
// )
// }



// destructuring 1 (props in functional components)
// const Greet = ({name, relation}) => {
//     return (
//       <div>
//         <h1>
//             Hello {name} is my {relation}
//         </h1>
//       </div>
//     )
//     }


// destructuring 2 (propd in functional components)
const Greet = props => {
    const { name, relation } = props
    return (
      <div>
        <h1>
            Hello {name} is my {relation}
        </h1>
      </div>
    )
    }  

 export default Greet