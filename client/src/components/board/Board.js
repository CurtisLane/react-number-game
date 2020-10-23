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

    const handleClick = e => {
        const tileVal = e.target.attributes.value["value"]
        const tileValIndex = shuffledTiles.indexOf(parseInt(tileVal))

        // if clicked tile is next to 0
        moveTile(tileValIndex)

    }

    const moveTile = (tileValIndex) => {
        const zeroIndex = shuffledTiles.indexOf(0)
        const a = shuffledTiles[tileValIndex];
        
        shuffledTiles[tileValIndex] = shuffledTiles[zeroIndex];
        shuffledTiles[zeroIndex] = a;
        console.log(tileValIndex, zeroIndex)
    }

    return (
        <Card className="bg-dark" style={{ width: "100%", padding: "-6.25% 0 -6.25% 0", position: "relative" }}>
            <Card.Body>
                <div style={{position: "relative", bottom: 0}} className="row no-gutters">
                    {shuffledTiles.map(t => {
                        return t > 0 ?
                            (
                                <div key={t} value={t} className="col-4">
                                    <Tile
                                    num={t}
                                    click={handleClick}
                                    />
                                </div>
                            ) : (
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