import React from 'react'
import Hoc_Parent from './hoc_parentComp'

function Hoc_Child2(props) {
    return (
      // <div>child two  {props.name}</div>
    <div>addtion is :{props.add}</div>
    )
  }



export default Hoc_Parent(Hoc_Child2, 2, 3)