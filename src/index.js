import React from 'react'
import ReactDOM from 'react-dom'
import Body from './component/Body'
import './style/index.css'

const BlogContainer = () =>{
    return(
        <div>
            <Body />
        </div>
    )
}

ReactDOM.render(<BlogContainer />, document.querySelector('#root'))