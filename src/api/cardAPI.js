import superagent from 'superagent'
import { port } from './port.js'

export const getPoke = (callback, idarray) => {
    const url = `${port}/pokemon`
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

