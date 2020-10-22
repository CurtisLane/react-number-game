import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Tile from '../tile/Tile'
import GameContext from '../../utils/GameContext'

// Includes game logic, displays numbered tiles


// Array shuffle function
const shuffle = array => array.sort(() => Math.random() - 0.5);


const Board = () => {
    
    const { gameState, setGameState } = useContext(GameContext)
    let shuffledTiles = shuffle(gameState.tileNumbers)

    return (
        <Card className="bg-dark" style={{ width: "100%", padding: "-10% 0 -10% 0", position: "relative" }}>
            <Card.Body>
                <div style={{position: "relative", bottom: 0}} className="row no-gutters">
                    {shuffledTiles.map(t => {
                        return t > 0 ?
                            (
                                <div key={t} className="col-4">
                                    <Tile
                                    num={t}
                                    />
                                </div>
                            )
                            :
                            (
                                <div key={t} className="col-4">
                                    {/* empty space */}
                                </div>
                            )
                        
                    })}
                </div>
            </Card.Body>

        </Card>
    )
}

export default Board;