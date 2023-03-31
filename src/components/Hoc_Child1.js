import React from 'react'
import Hoc_Parent from './hoc_parentComp'

function Hoc_Child1(props) {
    return (
      // <div>
      //   Child one {props.name}  
      // </div>
    <div>addtion is :{props.add}</div>

    )
  }

  export default Hoc_Parent(Hoc_Child1, 2, 3)