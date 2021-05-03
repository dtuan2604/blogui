import React, {useState, useEffect} from 'react'
import Post from './Post'
import { retrievePost } from '../api/postAPI'
import CreatePost from '../component/CreatePost'

const Body = () =>{
    const[posts, setPosts] = useState([])

    const getPost = ()=>{
        retrievePost(setPosts)
    }
    useEffect(()=>{
        getPost()
    }, []) 

    return(
        <div id="body">
            <CreatePost callback={getPost}/>
            {posts.map(post=>{
                return(
                <Post key={post._id} 
                    id={post._id}
                    title={post.title} 
                    text={post.text} 
                    poke={post.pokemon}
                    callback={getPost} />)
            })}       
        </div>
    )
}

export default Body