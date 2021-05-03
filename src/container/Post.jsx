import React, { useState } from 'react'
import Card from '../component/Card'
import {Paper, Button} from '@material-ui/core'
import { editPost, deletePost } from '../api/postAPI'


const Post = props =>{
    const [title, setTitle] = useState(props.title)
    const [text, setText] = useState(props.text)
    const [update, setUpdate] = useState(false)
    const getPost = props.callback
    const history = {"title": props.title, "text": props.text}

    const handleTitle = event =>{
        setTitle(event.target.value)
    }
    const handleText = event =>{
        setText(event.target.value)
    }
    const handleUpdateButton = async event =>{
        setUpdate(false)
        await editPost(props.id, title, text)
        getPost()
    }
    const handleDeleteButton = async event =>{
        await deletePost(props.id)
        getPost()
    }
    const handleEditButton = event =>{
        setUpdate(true)
    }
    const handleCancelButton = event =>{
        setTitle(history.title)
        setText(history.text)
        setUpdate(false)
    }
    
    return(
        <Paper>
            { update ? 
            (<div>
                <input type="text" className="title" onChange={handleTitle} value={title} />
                <br />
                <div className="test">
                    <Card poke={props.poke} />
                    <div className={props.poke.availability ? "post text" : "post"}>
                        <textarea className={props.poke.availability ? "inputwithpoke" : "inputnopoke"} 
                        onChange={handleText} value={text}/>
                    </div>
                </div>
                <br />
                <div className="groupButton">
                    <Button variant="outlined" color="primary" 
                        disabled={(text === "" || title === "" || 
                                    (text.localeCompare(history.text) === 0 && 
                                    title.localeCompare(history.title) === 0)) ? true : false } 
                        onClick={handleUpdateButton}>
                            Update
                    </Button>
                    <Button style={{marginTop: '5px'}} 
                        variant="outlined" color="secondary"
                        onClick={handleCancelButton}>
                            Cancel
                    </Button>
                </div>
            </div>) :
            (<div>
                <div className="dotmenu">
                <button className="droptb" />
                    <div className="dropdown-content">
                        <button className="dropdown-button" onClick={handleEditButton}>Edit</button>
                        <button className="dropdown-button" onClick={handleDeleteButton}>Delete</button>
                    </div>
                </div>
                <h3 className="title">{title}</h3>
                <div className={props.poke.availability ? "test" : ""}>
                    <Card poke={props.poke} /> 
                    <p className={props.poke.availability ? "post text" : "post"}>{text}</p>
                </div>
                <br />
            </div>)}
        </Paper>
    )
}

export default Post