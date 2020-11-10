// useEffect listening on gameState.gameOver. if true, stop timer.
// first click event with a value triggers startTimer()
import React, { useContext, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import GameContext from '../../utils/GameContext'
import dayjs from 'dayjs'

export default function Timer(){

    const { timerState, setTimerState, gameState } = useContext(GameContext)

    let time = new Date().getTime()
    let centiseconds = ("0" + (Math.floor(timerState / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerState / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerState / 60000) % 60)).slice(-2);

    const startTimer = () => {
        setInterval(() =>{
            setTimerState(Date.now() - time)
        }, 1)
    }

    useEffect(() => {
        startTimer()
    }, [])

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