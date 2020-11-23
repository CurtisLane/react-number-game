import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import GameContext from '../../utils/GameContext';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import API from '../../utils/API';

let yourTime;

export default function ScoreInputModal() {
    const {
        timerState,
        setTimerState,
        gameState,
        setGameState,
        highScoresState,
        setHighScoresState
    } = useContext(GameContext)
    const [show, setShow] = useState(false);
    const [nameValue, setNameValue] = useState('');

    const handleClose = () => {
        // Restart the game on close
        setGameState({ ...gameState, gameOver: true, firstMove: true })
        setTimerState({ timer: 0, timerStart: false, timerStop: false })
        setShow(false);
    }
    const handleShow = () => {
        // set variables for currentScore, min, sec, cs as "yourTime" from global
        setShow(true);
    }
    const handleSave = () => {
        // Save name and score to database
        const playerData = {name: nameValue, score: yourTime}
        console.log(highScoresState.highScores)
        API.postScore(playerData)
        .then(r => console.log(r))
        .then(handleClose)
    }
    const calculateScore = () => {
        const score = timerState.timer
        let centiseconds = ("0" + (Math.floor(score / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(score / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(score / 60000) % 60)).slice(-2);
        yourTime = `${minutes}:${seconds}:${centiseconds}`
        setHighScoresState({...highScoresState, currentScore: timerState.timer})
    }

    const handleNameInput = e => {
        const modalMessage = document.getElementById('modalMessage')
        const smallWarn = document.createElement('small')

        if (e.target.value.length <= 12){
            setNameValue(e.target.value)

            if (e.target.value.length === 12){
                smallWarn.textContent = 'Name must be 12 or less characters long.'
                modalMessage.appendChild(smallWarn)
            } else {
                if (modalMessage.firstChild) modalMessage.removeChild(modalMessage.firstChild)
            }
        }
    }

    useEffect(() => {
        if (gameState.gameOver && !gameState.firstMove) {
            calculateScore()
            handleShow()
        } 
        // temp show modal on load
        // else {
        //     calculateScore()
        //     handleShow()
        // }
    }, [gameState])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>You Win!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        Good job! Your time is {yourTime}! Enter your name to save your score.                    
                        <InputGroup className="my-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                value={nameValue}
                                onChange={handleNameInput}
                            />
                        </InputGroup>
                        <div id="modalMessage"></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Don't Save
                    </Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}