import React, {useState, useEffect} from 'react'
import Post from './Post'
import { retrievePost} from '../api/postAPI'
import CreatePost from './CreatePost'

const Body = () =>{
    const[posts, setPost] = useState([])

    const getPost = () =>{
        retrievePost(setPost)
    }
    useEffect(()=>{
        getPost()
    },[posts])

    return(
        <div>
            <CreatePost callback={getPost}/>
            {posts.map(post=>{
                return(
                <Post key={post._id} 
                    id={post._id}
                    title={post.title} 
                    text={post.text} 
                    poke={post.pokemon} 
                    callback={getPost}/>)
            })}       
        </div>
    )
}

export default Body