import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Tile({num}) {
    return (
        <Card className="bg-dark">
            <Card.Body>{num}</Card.Body>
        </Card>
    )
}