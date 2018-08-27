import React,{Component} from 'react'
import ReactDom from 'react-dom'

class Counter extends Component{
    static defaultProps = {
        name:'li'
    }
    state = {
        num:0
    }
    constructor(props){
        super()
        console.log(props.name)
        console.log('parent-constructor')
        
    }
    componentWillMount(){
        console.log('parent-componentWillMount')
    }
    componentDidMount(){
        console.log('parent-componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('parent-shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('parent-componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('parent-componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('parent-componentWillUnmount')
    }
    handleClick = ()=>{
        this.setState({num:this.state.num + 1})
    }
    render(){
        console.log('parent-render')
        return (
            <div>
                <button onClick={this.handleClick}>+</button>
                {this.state.num}
                <Child name='li' age='7' hobby={this.state.num}></Child>
            </div>
        )
    }
}

class Child extends Component{
    constructor(props){
        super()
        console.log('child-constructor')
        
    }
    componentWillMount(){
        console.log('child-componentWillMount')
    }
    componentDidMount(){
        console.log('child-componentDidMount')
    }
    componentWillReceiveProps(){
        console.log(arguments)
        console.log('child-componentWillReceiveProps')
    }
    shouldComponentUpdate(){
        console.log('child-shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('child-componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('child-componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('child-componentWillUnmount')
    }
    render(){
        console.log('child-render')
        return (
            <span>{this.props.name}</span>
        )
    }
}
ReactDom.render(<Counter></Counter>,window.root)