import React, { useState } from 'react'
import Card from './Card'
import Paper from '@material-ui/core/Paper'
import { editPost, deletePost } from '../api/postAPI'

const Post = props =>{
    const [title, setTitle] = useState(props.title)
    const [text, setText] = useState(props.text)
    const [update, setUpdate] = useState(false)
    const getPost = props.callback
    const handleEditButton = event =>{
        setUpdate(true)
    }
    const handleUpdateButton = event =>{
        setUpdate(false)
        editPost(props.id, title, text)
        getPost()
    }
    const handleTitle = event =>{
        setTitle(event.target.value)
    }
    const handleText = event =>{
        setText(event.target.value)
    }
    const handleDeleteButton = event =>{
        deletePost(props.id)
        getPost()
    }

    return(
        <Paper className="post">
            { update ? 
            (<div>
                <input type="text" onChange={handleTitle} value={title} />
                <br />
                <div className="test">
                    <Card poke={props.poke} />
                    <div className={props.poke.availability ? "b text" : "b"}>
                        <textarea style={{width: '250px', minHeight:'300px'}}
                        onChange={handleText} value={text}/>
                    </div>
                </div>
                <button onClick={handleUpdateButton}>Update</button>
            </div>) :
            (<div>
                <h3>{title}</h3>
                <div className={props.poke.availability && "test"}>
                    <Card poke={props.poke} /> 
                    <p className={props.poke.availability ? "b text" : "b"}>{text}</p>
                </div>
                <br />
                <button onClick={handleEditButton}>Edit</button>
                <br />
                <button onClick={handleDeleteButton}>Delete</button>
            </div>)}
        </Paper>
    )
}

export default Post