import React from 'react'
import Board from '../../components/board/Board'
import ScoreBoard from '../../components/scoreBoard/ScoreBoard'

// Home page contains game board and score board
// Organized into columns of single row using bootstrap
export default function Home(){
    return (
        <div className="container">
            <div className="row my-3">
                {/* timer goes here */}
            </div>
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-0 mb-5">
                    {/* game board */}
                    <Board />
                </div>
                <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-0 text-center text-lg-left">
                    {/* score board */}
                    <ScoreBoard />
                </div>
            </div>
        </div>
    )
}