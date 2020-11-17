import { useState } from "react";

const useGameModel = () => {
    const [gameState, setGameState] = useState(
        {
            tileNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            shuffledTiles: [],
            firstMove: true,
            gameOver: true
        }
    )

    const [highScoresState, setHighScoresState] = useState(
        {
            highScores: [],
            blanks: [],
            currentScore: 0
        }
    )

    const [timerState, setTimerState] = useState(
        {
            timer: 0,
            timerStart: false,
            timerStop: false
        }
    )

    return {
        gameState,
        setGameState,
        highScoresState,
        setHighScoresState,
        timerState,
        setTimerState
    }
}

export default useGameModel;