import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Tile({num}) {
    return (
        <Card className="bg-light" style={{width: "100%", height: "100%", paddingBottom: "40%", position: "relative", bottom: "0"}}>
            <Card.Body>{num}</Card.Body>
        </Card>
    )
}