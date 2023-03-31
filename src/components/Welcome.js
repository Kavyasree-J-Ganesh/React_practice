import React from 'react'

//  class Welcome extends React.Component {
//     render() {
//         return (
//              <h1>
//                  Welcome { this.props.name} as {this.props.relation}
//              </h1>
//         )
//     }
// }


// destructuring props in class component
class Welcome extends React.Component {
    render() {
        const {name,relation} = this.props
        // const {state1, state2} = this.state  = when number os state is there
        return (
             <h1>
                 Welcome {name} as {relation}
             </h1>
        )
    }
}

export default Welcome