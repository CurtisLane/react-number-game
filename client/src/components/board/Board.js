import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Tile from '../tile/Tile'
import GameContext from '../../utils/GameContext'

// Includes game logic, displays numbered tiles

// Array shuffle function
const shuffle = array => array.sort(() => Math.random() - 0.5);
// check if an array will create a solveable game
const isSolveable = array => {
    const a = array.length
    let inversions = 0
    for (let i = 0; i < a; i++){
        if (array[i] - array[i+1] > 0){
            inversions += Math.abs(array[i] - array[i+1])
        }
    }
    if (inversions % 2){
        return false
    } else {
        return true
    }
}

const Board = () => {
    
    const { gameState, setGameState } = useContext(GameContext)

    const setTiles = () => {
        let shuffledTiles = shuffle(gameState.tileNumbers)
        let solveable = isSolveable(shuffledTiles)
        console.log(shuffledTiles, solveable)
        if (solveable){
            setGameState({...gameState, shuffledTiles: shuffledTiles, gameOver: false})
        } else {
            setTiles()
        }
    }
    
    useEffect(() => {
        setTiles()
    }, [])
    
    const handleClick = e => {
        const zeroIndex = gameState.shuffledTiles.indexOf(0)
        const tileVal = e.target.attributes.value["value"]
        const tileValIndex = gameState.shuffledTiles.indexOf(parseInt(tileVal))

        // if clicked tile is next to 0, move tile
        if (tileValIndex === 1 || tileValIndex === 3 || tileValIndex === 4 || tileValIndex === 5 || tileValIndex === 7 ){
            if (Math.abs(zeroIndex - tileValIndex) === 3 || Math.abs(zeroIndex - tileValIndex) === 1) {
                moveTile(tileValIndex, zeroIndex)
            }
        } else if (tileValIndex === 0 || tileValIndex === 6){
            if (Math.abs(zeroIndex - tileValIndex) === 3 || zeroIndex - tileValIndex === 1) {
                moveTile(tileValIndex, zeroIndex)
            }
        } else if (tileValIndex === 2 || tileValIndex === 8){
            if (Math.abs(zeroIndex - tileValIndex) === 3 || zeroIndex - tileValIndex === -1) {
                moveTile(tileValIndex, zeroIndex)
            }
        }
        
    }

    const moveTile = (tileValIndex, zeroIndex) => {
        const winArr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
        const a = gameState.shuffledTiles[tileValIndex];
        let s = gameState.shuffledTiles;
        s[tileValIndex] = s[zeroIndex];
        s[zeroIndex] = a;
        setGameState({...gameState, shuffledTiles: s});
        console.log(gameState.shuffledTiles)
        if (gameState.shuffledTiles.every((val, index) => val === winArr[index])){
            handleGameOver()
        }
    }

    const handleGameOver = () => {
        setGameState({...gameState, gameOver: true});
        console.log("Game over!");
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