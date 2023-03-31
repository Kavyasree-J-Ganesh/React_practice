import React from 'react'

export class ClassClick extends React.Component {
    clickHandler() {
        console.log('Clicked the button')
    }

    render() {
        return (
            <div>
                <button onClick ={this.clickHandler}> Click Me</button>
            </div>
        )
    }
}
