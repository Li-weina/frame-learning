import React,{Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

class Counter extends Component{
    static defaultProps = {
        name:'no'
    }
    static propTypes = {
        name:PropTypes.string.isRequired,
        age:PropTypes.number,
        hobby:PropTypes.arrayOf(PropTypes.string),
        pos:PropTypes.shape({
            x:PropTypes.number.isRequired,
            y:PropTypes.number.isRequired
        }),
        salary(obj,key){
            if(obj[key]<=3000){
                console.log('less')
            }
            console.log(arguments)
        }
    }
    render(){
        let {name,age,hobby,pos,salary} = this.props
        return (
            <div>{name}:{age}</div>
        )
    }
}
let obj = {
    name:'li',
    age:9,
    hobby:['游泳','吃'],
    pos:{
        x:20,
        y:40
    },
    salary:3000
}
ReactDom.render(<Counter {...obj}></Counter>,window.root)