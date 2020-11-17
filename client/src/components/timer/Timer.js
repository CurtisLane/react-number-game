// useEffect listening on gameState.gameOver. if true, stop timer.
// first click event with a value triggers startTimer()
import React, { useContext, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import GameContext from '../../utils/GameContext'
import dayjs from 'dayjs'

// assign variable globally in order for clearInterval to work
let intervalTimer;

export default function Timer(){

    const { 
        timerState, 
        setTimerState, 
        gameState, 
        highScoresState, 
        setHighScoresState
    } = useContext(GameContext)

    let time = new Date().getTime()
    let centiseconds = ("0" + (Math.floor(timerState.timer / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerState.timer / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerState.timer / 60000) % 60)).slice(-2);


    const startTimer = () => {
        console.log("start")
        intervalTimer = setInterval(() =>{
            setTimerState({timerStart: false, timerStop: false, timer: Date.now() - time})
        }, 1)
    }

    const stopTimer = () => {
        let stopTime = parseInt(timerState.timer)
        clearInterval(intervalTimer)
        setTimerState({...timerState, timerStart: false, timerStop: true })
    }

    useEffect(() => {
        if (timerState.timerStart && !gameState.gameOver){    
            startTimer()
        }    
        if (gameState.gameOver && !timerState.timerStop && !gameState.firstMove){
            stopTimer()
        }

    }, [gameState])

    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    {minutes}:{seconds}:{centiseconds}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}