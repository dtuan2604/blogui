import React, {useState} from 'react'
import SearchPokemonBar from './SearchPokemonBar'
import Paper from '@material-ui/core/Paper'
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
    const handleSubmit = event => {
        createPost(pokemon, title, text)
        setText("")
        setTitle("")
        setCreate(false)
        getPost()
    }
    const callback = poke =>{
        setPokemon(poke)
    }

    return(
        <div>
        {create ? 
        (
            <Paper>
                <SearchPokemonBar callback={callback} />
                <br />
                <label>Title:</label>
                <input type="text" value={title} style={{width: '400px'}} onChange={handleTitle}/>
                <br />
                <textarea style={{marginTop: '10px', width: '530px', height: '200px'}} 
                    value={text} onChange={handleText} />
                <button onClick={handleSubmit}>Post</button>
            </Paper>
        ):
        (
            <div className="createButton">
                <button onClick={handleCreateButton}>Create Post</button>
            </div>
        )}
        </div> 
    )

}

export default CreatePost