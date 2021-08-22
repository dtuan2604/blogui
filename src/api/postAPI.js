import superagent from 'superagent'
import { port } from './port.js'

export const retrievePost = async (props) =>{
    const { setPosts, setLoading } = props
    try{
        setLoading(true)
        const { body } = await superagent.get(`${port}/home`)
        setPosts(body)
        setLoading(false)
    } catch(e){
        console.error(e)
    }
}


export const createPost = async (pokemon, title, text) =>{
    await superagent
    .post(`${port}/createBlog`)
    .send({ 
        pokemon,
        title,
        text
     })
    .set('Content-Type','application/json')
    .end((err,res) =>{
        if(err){
            console.error(err)
            return
        }
    })
    return
}
export const editPost = async (id, title, text) =>{
    await superagent
    .post(`${port}/updateBlog`)
    .send({ 
        "_id": id,
        title,
        text
     })
    .set('Content-Type','application/json')
    .end((err,res) =>{
        if(err){
            console.error(err)
            return
        }
    })
    return
}

export const deletePost = async id => {
    await superagent.delete(`${port}/deleteBlog?id=${id}`)
    return
}
