import { useState } from "react";

const useGameModel = () => {
    const [gameState, setGameState] = useState()

    return {
        gameState,
        setGameState
    }
}

export default useGameModel;