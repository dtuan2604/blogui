import React, {useState, useEffect} from 'react'
import { getCard } from '../api/cardAPI'


const SearchPokemonBar = props =>{
    const [data, setData] = useState([])
    const [ids, setIds] = useState([])
    const [text, setText] = useState("")
    const [clicked, setClicked] = useState(false)
    const callback = props.callback

    const handleText = event =>{
        setText(event.target.value)
    }
    const handleClick = event => {
        setIds(text.trim().split(/\s+/))
    }
    const onChangeValue = event =>{
        callback(data.find(poke =>{return poke.id === parseInt(event.target.value, 10)}))
    }
    const handleClickbutton = event =>{
        setClicked(true)
    }

    useEffect(()=>{
        getCard(setData, ids)
    }, [ ids])


    const result = data => {
        return data.map(poke => {
            if (poke.name === 'notfound')
                poke = {
                    ...poke,
                    name: "notfound",
                    types: ["notfound"]
                }      
            return(
                <span key={poke.id}>
                    <img src={poke.img} width='80px' height='80px' key={poke.img} alt={poke.name} />
                    <input type="radio" value={poke.id} name="pokemon" onChange={onChangeValue}/>
                </span>
            )})
    }

    return(
        <div>
            {clicked ? 
            (<div>
                <p>Please enter the id(s) separately by whitespace</p>
                <input type="text" value={text} onChange={handleText} />
                <button onClick={handleClick}>Submit</button>
                <br />
                <div className="result">
                    {result(data)}
                </div>
            </div>):
            (
                <button onClick={handleClickbutton}>Add Pokemon</button>
            )}
        </div>
        )

}

export default SearchPokemonBar