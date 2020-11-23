import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Tile from '../tile/Tile'
import GameContext from '../../utils/GameContext'
import './board.css'

// Includes game logic, displays numbered tiles

// Array shuffle function
const shuffle = array => array.sort(() => Math.random() - 0.5);

// check if an array will create a solveable game
const numOfInversions = array => {
    const a = array.length
    let inversions = 0
    for (let i = 0; i < a; i++){
        for (let j = i + 1; j < a; j++)
            if ((array[i] > array[j]) && (array[i] > 0) && (array[j] > 0)){
                inversions++ 
            }
    }
    return inversions
}

const Board = () => {
    
    const { gameState, setGameState, timerState, setTimerState, highScoresState } = useContext(GameContext)

    const setTiles = () => {
        let shuffledTiles = shuffle(gameState.tileNumbers)
        let solveable = numOfInversions(shuffledTiles) % 2 === 0
        if (solveable){
            setGameState({...gameState, shuffledTiles: shuffledTiles, gameOver: false})
        } else {
            setTiles()
        }
    }

    useEffect(() => {
        if (gameState.gameOver && gameState.firstMove){
            setTiles()
        }
    }, [gameState])

    const handleClick = e => {
        const zeroIndex = gameState.shuffledTiles.indexOf(0)
        const tileVal = e.target.attributes.value["value"]
        const tileValIndex = gameState.shuffledTiles.indexOf(parseInt(tileVal))

        /* \/ Convert to switch statement \/ */

        // if clicked tile is next to 0, move tile
        if (tileValIndex === 1 || tileValIndex === 3 || tileValIndex === 4 || tileValIndex === 7 ){
            if (Math.abs(zeroIndex - tileValIndex) === 3 || Math.abs(zeroIndex - tileValIndex) === 1) {
                moveTile(tileValIndex, zeroIndex)
            }
        } else if (tileValIndex === 5){
            if (Math.abs(zeroIndex - tileValIndex) === 3 || zeroIndex - tileValIndex === -1) {
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
        if (gameState.firstMove){
            setTimerState({...timerState, timerStart: true})
            setGameState({...gameState, firstMove: false})
        }
        if (gameState.shuffledTiles.every((val, index) => val === winArr[index])){
            handleGameOver()
        }
    }

    const handleGameOver = () => {
        setGameState({...gameState, gameOver: true});
        console.log("Game over!");
    }

    return (
        // id="boardCard" below
        <Card className="bg-dark">
            <Card.Body>
                {/* id="boardCardBody" below */}
                <div className="row no-gutters">
                    {gameState.shuffledTiles.map(t => {
                        // returns tile if number is not 0
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
