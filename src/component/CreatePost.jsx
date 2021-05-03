import React, {useState} from 'react'
import SearchPokemonBar from './SearchPokemonBar'
import { Paper, Button } from '@material-ui/core'
import { createPost } from '../api/postAPI'

const CreatePost = props =>{
    const [create, setCreate] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [pokemon, setPokemon] = useState({})
    const getPost = props.callback

    const handleCreateButton = event =>{
        setCreate(true)
    }
    const handleTitle = event =>{
        setTitle(event.target.value)
    }
    const handleText = event =>{
        setText(event.target.value)
    }
    const handleSubmit = async event => {
        await createPost(pokemon, title, text)
        setText("")
        setTitle("")
        setPokemon({})
        setCreate(false)
        getPost()
    }
    const handleCancel = event =>{
        setText("")
        setTitle("")
        setPokemon({})
        setCreate(false)
    }

    return(
        <div>
        {create ? 
        (
            <Paper className="create">
                <SearchPokemonBar callback={setPokemon} />
                <br />
                <label>Title:</label>
                <input type="text" value={title} style={{width: '400px'}} onChange={handleTitle}/>
                <br />
                <textarea style={{marginTop: '10px', marginLeft: '10px', width: '520px', height: '200px'}} 
                    value={text} onChange={handleText} />
                <div className="groupButton">
                    <Button variant="outlined" color="primary" style={{width: "90px"}}
                        disabled={(text === "" || title === "") ? true : false } 
                        onClick={handleSubmit}>
                            Post
                    </Button>
                    <Button style={{marginTop: '5px'}} 
                        variant="outlined" color="secondary"
                        onClick={handleCancel}>
                            Cancel
                    </Button>
                </div>
            </Paper>
        ):
        (
            <div className="create">
                <Button variant="outlined" onClick={handleCreateButton}>Create Post</Button>
            </div>
        )}
        </div> 
    )
}

export default CreatePost