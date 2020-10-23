import { useState } from "react";

const useGameModel = () => {
    const [gameState, setGameState] = useState(
        {
            tileNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        
            shuffledTiles: [],
        
            gameOver: false
        }
    )

    return {
        gameState,
        setGameState
    }
}

export default useGameModel;