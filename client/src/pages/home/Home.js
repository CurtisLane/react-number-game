import React from 'react'
import Board from '../../components/board/Board'

// Home page contains game board and score board
// Organized into columns of single row using bootstrap
export default function Home(){
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-md-8 col-lg-6 offset-lg-1">
                    {/* game board goes here */}
                    <Board />
                </div>
                <div className="col-12 col-md-2 col-lg-3 offset-md-1">
                    {/* score board goes here */}
                </div>
            </div>
        </div>
    )
}