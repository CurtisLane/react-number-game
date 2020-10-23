import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Tile from '../tile/Tile'
import GameContext from '../../utils/GameContext'

// Includes game logic, displays numbered tiles


// Array shuffle function
const shuffle = array => array.sort(() => Math.random() - 0.5);


const Board = () => {
    
    const { gameState, setGameState } = useContext(GameContext)
    
    useEffect(() => {
        let shuffledTiles = shuffle(gameState.tileNumbers)
        setGameState({...gameState, shuffledTiles: shuffledTiles, gameOver: false})
        console.log(gameState.shuffledTiles)
    }, [])
    
    const handleClick = e => {
        const zeroIndex = gameState.shuffledTiles.indexOf(0)
        const tileVal = e.target.attributes.value["value"]
        const tileValIndex = gameState.shuffledTiles.indexOf(parseInt(tileVal))

        // if clicked tile is next to 0
        if (Math.abs(zeroIndex - tileValIndex) === 3 || Math.abs(zeroIndex - tileValIndex) === 1) {
            moveTile(tileValIndex, zeroIndex)
        }
        
    }

    const moveTile = (tileValIndex, zeroIndex) => {
        const a = gameState.shuffledTiles[tileValIndex];
        
        let s = gameState.shuffledTiles
        s[tileValIndex] = s[zeroIndex];
        s[zeroIndex] = a;
        setGameState({...gameState, shuffledTiles: s})
    }

    const handleGameOver = () => {
        setGameState({...gameState, gameOver: true})
        alert("Game over!")
    }

    return (
        <Card className="bg-dark" style={{ width: "100%", padding: "-6.25% 0 -6.25% 0", position: "relative" }}>
            <Card.Body>
                <div style={{position: "relative", bottom: 0}} className="row no-gutters">
                    {gameState.shuffledTiles.map(t => {
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