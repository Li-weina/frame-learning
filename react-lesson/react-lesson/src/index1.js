import React from 'react';
import {render} from 'react-dom';
let str = 'no'
let el = <h2>{true?<span>child</span>:void 0}</h2>
let arr = [1,2,3]
let el1 = (
    arr.map((item,index)=>(
        <li key={index}>list</li>
    ))
)
let el2 = (
    <h2 name="zfpx">no<span>yes</span></h2>
)
console.log(el2)
// render(el1,window.root)
// function render(vnode,container) {
//     if (typeof vnode === 'string') return container.appendChild(document.createTextNode(vnode))
//     let { type, props } = vnode;
//     let tag = document.createElement(type);
//     for(let key in props){
//       tag.setAttribute(key,props[key]);
//     }
//     props.children.forEach(child => {
//       render(child,tag);
//     });    // ['hello ',{type,props,children}]
//     container.appendChild(tag);
//   }
//   render(el2,window.root);
function count(){
    return (
        <div>{new Date().toLocaleString}</div>
    )
}
render(<count></count>,window.root)