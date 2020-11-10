import { useState } from "react";

const useGameModel = () => {
    const [gameState, setGameState] = useState(
        {
            tileNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            shuffledTiles: [],
            gameOver: true
        }
    )

    const [highScoresState, setHighScoresState] = useState()

    const [timerState, setTimerState] = useState(0)

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