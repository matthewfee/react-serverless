import * as React from 'react'

type CountProviderProps = { children: React.ReactNode }

type ScoreHook = { score: number; SetScore: React.Dispatch<React.SetStateAction<number>> }

type ScoreHookAttempt2 = (number | React.Dispatch<React.SetStateAction<number>>)[]

const ScoreContext = React.createContext<ScoreHookAttempt2 | undefined>(undefined)

const useScore = () => React.useContext(ScoreContext)

const ScoreProvider = ({ children }: CountProviderProps) => {
    const [score, SetScore] = React.useState(-1)

    return <ScoreContext.Provider value={[score, SetScore]}>{children}</ScoreContext.Provider>
}

export { ScoreProvider, useScore }
