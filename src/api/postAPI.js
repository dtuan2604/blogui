import superagent from 'superagent'

export const retrievePost = async callback =>{
    const { body } = await superagent.get('http://localhost:3001/home')
    callback(body)
}


export const createPost = async (pokemon, title, text) =>{
    await superagent
    .post("http://localhost:3001/createBlog")
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
    .post("http://localhost:3001/updateBlog")
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
    await superagent.delete(`http://localhost:3001/deleteBlog?id=${id}`)
    return
}
