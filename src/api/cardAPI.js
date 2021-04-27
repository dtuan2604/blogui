import superagent from 'superagent'

export const getCard = (callback, idarray) => {
    const url = "http://localhost:3001/pokemon"
    superagent
    .post(url)
    .send({ ids: idarray })
    .set('Content-Type','application/json')
    .end((err,res) =>{
        if(err){
            console.error(err)
            return
        }
            callback(res.body)
    })
    return
}

