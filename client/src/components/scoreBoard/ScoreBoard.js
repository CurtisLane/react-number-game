import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const temp = [
    {
        name: "Curtis",
        score: '00:05:46'
    },
]

const blanks = []

for (let i = 20; blanks.length < (20 - temp.length); i--){
    blanks.unshift(`${i}. ------ --:--:--`)
}

export default function ScoreBoard() {
    return (
        <Card className="bg-dark text-light">
            <Card.Body>
                    <Card.Title className="text-center pb-2">High Scores</Card.Title>
                <ListGroup variant="list-group-flush bg-secondary">
                    <div className="row no-gutters">                        
                        {temp.map((score, i) => {
                            return (
                                <div className="col-6" key={score.name}>
                                    <ListGroup.Item className="bg-secondary">
                                            {i + 1}. {score.name} {score.score}
                                    </ListGroup.Item>
                                </div>
                            )
                        })}
                        {blanks.map((blank, i) => {
                            return (  
                                <div className="col-6" key={blank}>                              
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