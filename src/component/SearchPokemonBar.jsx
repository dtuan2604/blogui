import React, {useState, useEffect} from 'react'
import { getPoke } from '../api/cardAPI'
import Button from '@material-ui/core/Button'


const SearchPokemonBar = props =>{
    const [data, setData] = useState([])
    const [ids, setIds] = useState([])
    const [text, setText] = useState("")
    const [clicked, setClicked] = useState(false)
    const callback = props.callback

    const handleText = event =>{
        setText(event.target.value)
    }
    const handleSubmit= event => {
        setIds(text.trim().split(/\s+/))
    }
    const handleCancel = event => {
        setText("")
        setData([])
        setClicked(false)
    }
    const onChangeValue = event =>{
        callback(data.find(poke =>{return poke.id === parseInt(event.target.value, 10)}))
    }
    const handleClickbutton = event =>{
        setClicked(true)
    }
    const result = data => {
        return data.filter(poke => poke.name !== 'notfound')
        .map(poke => {
            return(
                <div key={poke.id} className="smallcard">
                    <img src={poke.img} width='90px' height='90px' key={poke.img} alt={poke.name} />
                    <br />
                    <input type="radio" value={poke.id} name="pokemon" onChange={onChangeValue}/>
                </div>
            )})
    }
    const message = data =>{
        return data.filter(poke => poke.name === 'notfound')
                    .map(poke =>{
                        return(
                        <p className="errorMessage" key={poke.id}>
                            Pokemon with name or id by "{poke.id}" is not existed
                        </p>)
                    })
    }

    useEffect(()=>{
        getPoke(setData, ids)
    }, [ ids ])

    return(
        <div className="pokeBar">
            {clicked ? 
            (<div>
                <p><b>Please enter the id(s) or name separately by whitespace</b></p>
                <input type="text" value={text} onChange={handleText} />
                <Button variant="outlined" color="primary" 
                        disabled={(text === "") ? true : false } 
                        style={{marginLeft: '5px', marginRight: '5px'}}
                        onClick={handleSubmit}>
                            Submit
                </Button>
                <Button variant="outlined" color="secondary"
                    onClick={handleCancel}>
                        Cancel
                </Button>
                <br />
                <div className="result">
                    {message(data)}
                    {result(data)}
                </div>
            </div>):
            (
                <Button variant="outlined" onClick={handleClickbutton}>Add Pokemon</Button>
            )}
        </div>
        )

}

export default SearchPokemonBar