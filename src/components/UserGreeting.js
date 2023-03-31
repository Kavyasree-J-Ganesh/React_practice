import React, {Component} from "react";

class UserGreeting extends Component {

constructor(props) {
    super(props)
    this.state = {
        isLoggedIn: false
    }
}

render() {

   // ternary operation
    return(
        this.state.isLoggedIn ?
        <div>Welcome Kavya</div> :
        <div>Welcome Guest</div>
    )

        // short circuit
        // return this.state.isLoggedIn && <div>Welcome Kavya</div>

     //element variable
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Kavya</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


        // if/else
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             Welcom guest
    //         </div>
    //     )
    // }


    // return (
    //     <div>
    //        <div>Welcome kavya</div>
    //        <div> Welcome guest</div>
    //     </div>
    // )
}
}


export default UserGreeting