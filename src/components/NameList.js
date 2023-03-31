import React from 'react'
import Person from './Person'

function NameList() {
     const names = ['Kavya', 'Keerthana', 'Jaya', 'Ganesh']

    const persons = [
        {
            id: 1,
            name: 'Kavya',
            age:25,
            skill:'Dancing'
        },
        {
            id: 2,
            name: 'Keerthana',
            age:29,
            skill:'Reading'
        },
        {
            id: 3,
            name: 'Jaya',
            age:50,
            skill:'Cooking'
        },
        {
            id: 4,
            name: 'Ganesh',
            age:55,
            skill:'Singing'
        }
    ]

    //<h2> I am {person.name}. I am {person.age} years old. I know {person.skill}
    const nameList = names.map((name, index) =>  <h2 key={index}> {index} {name}</h2>)
    return <div>{nameList}</div>


            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[3]}</h2> */}
}


export default NameList