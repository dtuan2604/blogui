import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const Card = props => {
    const poke = props.poke
    return(
        <Flippy
            flipOnHover={false} 
            flipOnClick={true} 
            flipDirection="horizontal" 
            style={{ width: '200px', height: '300px' }}>

            <FrontSide>
                <img src={poke.sprite} alt={poke.name} width='200px' height='200px' />
                <p>Click to view poke's information</p>
            </FrontSide>

            <BackSide>
                <p><b>ID:</b> {poke.id}</p>
                <p><b>Name:</b> {poke.name}</p>
                <p><b>Types:</b> {poke.types.map(type=>{return "'"+type+"' "})}</p>
            </BackSide>

        </Flippy>
    )
}

export default Card