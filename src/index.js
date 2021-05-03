import React from 'react'
import ReactDOM from 'react-dom'
import Body from './container/Body'
import './style/index.css'

const BlogContainer = () =>{
    return(
        <div>
            <div id="navbar">POKEMON</div>
            <Body />
        </div>
    )
}

ReactDOM.render(<BlogContainer />, document.querySelector('#root'))