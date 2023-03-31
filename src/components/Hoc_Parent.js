import React from 'react'

const  Hoc_Parent = (ExistingHoc_Comp, x,y) =>{
  let a =x;
  let b=y;

  let addtion = a*b

function Hoc_parentComp() {
  return (
    <ExistingHoc_Comp 
    // name ="123456789"
     add ={addtion} 
      />
  )
}
    return Hoc_parentComp
}

export default Hoc_Parent