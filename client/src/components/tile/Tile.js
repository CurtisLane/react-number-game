import React from 'react'
import Card from 'react-bootstrap/Card'
import './tile.css'

export default function Tile({ num, click }) {
    return (
        <Card className="bg-light num-tile text-center" value={num} onClick={click}>
            <Card.Body value={num}>
                        {num}
            </Card.Body>
        </Card>
    )
}