import React, {useState} from 'react'




const CreatePost = () =>{
    const [create, setCreate] = useState(false)
    const handleCreateButton = event =>{
        setCreate(true)
    }

    const SearchBar = () =>{
        return(
            <p>Hello</p>
        )
    }

    return(
        <div>
        {create ?
        (
            <div>
                {SearchBar}
            </div>
        ):
        (
            <button onClick={handleCreateButton}>Create Post</button>
        )}
        </div>
    )

}

export default CreatePost