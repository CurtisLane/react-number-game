import React from 'react'
import Card from 'react-bootstrap/Card'
import Tile from '../tile/Tile'

let temp = [0, 1, 2, 3, 4, 5, 6, 7, 8]
export default function Board() {
    return (
        <Card className="bg-dark">
            <Card.Body>
                <div className="row">
                    {temp.map(t => {
                        return t > 0?
                            (
                                <div className="col-4">
                                    <Tile
                                    key={t}
                                    num={t}
                                    />
                                </div>
                            )
                            :
                            (
                                <div className="col-4">
                                    empty
                                </div>
                            )
                        
                    })}
                </div>
            </Card.Body>

        </Card>
    )
}