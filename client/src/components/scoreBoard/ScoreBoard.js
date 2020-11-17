import React, { useContext, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import API from '../../utils/API.js'
import GameContext from '../../utils/GameContext.js'

export default function ScoreBoard() {

    const { 
        timerState, 
        setTimerState, 
        gameState, 
        highScoresState, 
        setHighScoresState
    } = useContext(GameContext)

    const getScores = () => {
        API.getScores()
        .then(r => {
            let blanks = []
            
            for (let i = 24; blanks.length < (24 - r.data.length); i--){
                blanks.unshift(`${i}. ------ --:--:--`)
            }
            setHighScoresState({...highScoresState, highScores: r.data, blanks: blanks})
        })
    }

    useEffect(() => {
        getScores()
    }, [])



    return (
        <Card className="bg-dark text-light">
            <Card.Body>
                    <Card.Title className="text-center pb-4">High Scores</Card.Title>
                <ListGroup variant="list-group-flush bg-secondary">
                    <div className="row no-gutters">                        
                        {highScoresState.highScores.map((score, i) => {
                            return (
                                <div className="col-6 col-lg-4" key={score.name}>
                                    <ListGroup.Item className="bg-secondary">
                                            {i + 1}. {score.name} {score.score}
                                    </ListGroup.Item>
                                </div>
                            )
                        })}
                        {highScoresState.blanks.map((blank, i) => {
                            return (  
                                <div className="col-6 col-lg-4" key={blank}>                              
                                    <ListGroup.Item className="bg-secondary">
                                        {blank}
                                    </ListGroup.Item>
                                </div>
                            )
                        })}
                    </div>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}