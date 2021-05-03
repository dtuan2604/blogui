import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const Card = props => {
    const poke = props.poke
    if(props.poke.availability === "true" || props.poke.availability === true)
        return(
            <div className="post card">
                <Flippy
                    flipOnHover={false} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    style={{ 
                        width: '200px', 
                        height: '300px'}}>

                    <FrontSide>
                        <img src={poke.img} alt={poke.name} width='200px' height='200px' />
                        <p className="cardtext" style={{textAlign: 'center'}}>
                            Click to view poke's information
                        </p>
                    </FrontSide>

                    <BackSide className="cardtext">
                        <p><b>ID:</b> {poke.id}</p>
                        <p><b>Name:</b> {poke.name}</p>
                        <p><b>Types:</b> {poke.types.map(type=>{return "'"+type+"' "})}</p>
                    </BackSide>
                </Flippy>
            </div>
        )
    else 
        return(<span></span>)
}

export default Card