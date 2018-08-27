import React,{Component} from 'react'
import reactDom from 'react-dom'
class Counter extends Component{
    state = {
        num: new Date().toLocaleString()
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({num:new Date().toLocaleString()})
        })
    }
    handleClick=()=>{
        reactDom.unmountComponentAtNode(window.root)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        console.log(this.props)
        return (
            <div><button onClick={this.handleClick}>删除</button>{this.state.num}</div>
        )
    }
}
let obj = {
    name:'ok'
}
reactDom.render(<Counter name='li'></Counter>,window.root)
// function Count(){
//     return (
//         <div>{new Date().toLocaleString()}</div>
//     )
// }
// setInterval(()=>{
//     reactDom.render(<Count></Count>,window.root)
// })
