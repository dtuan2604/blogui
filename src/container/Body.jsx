import React, {useState, useEffect} from 'react'
import Post from './Post'
import { retrievePost } from '../api/postAPI'
import CreatePost from '../component/CreatePost'
import { LinearProgress }  from '@material-ui/core'

const Body = () =>{
    const[posts, setPosts] = useState([])
    const [ loading, setLoading ] = useState(false)

    const getPost = ()=>{
        retrievePost({setPosts, setLoading})
    }
    useEffect(()=>{
        getPost()
    }, []) 

    return(
        <div id="body">
            <CreatePost loading={loading} callback={getPost}/>
            {loading ? 
            (<LinearProgress id="progress-bar" color="secondary"/>)
            :posts.map(post=>{
                return(
                <Post 
                    key={post._id} 
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