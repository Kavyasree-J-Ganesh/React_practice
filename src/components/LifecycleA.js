import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Kavya'
        }
        console.log('LifecycleA constructor')
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    changesState = () => {
        this.setState({
            name:'Keralite'
        })
    }

    render() {
        console.log('Lifecycle render')
        return (
        <div>
            <div>LifecycleA</div>
            <button onClick={this.changesState}>Change state</button>
            <LifecycleB />
        </div>
        )
    }
}


export default LifecycleA