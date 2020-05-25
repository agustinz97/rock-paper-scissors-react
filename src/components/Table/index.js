import React, { useState, useContext } from 'react'

import tableBg from '../../images/bg-triangle.svg'

import { TableStyled } from './styles'
import { Token } from '../Token'
import { ScoreContext } from '../../App'
import { Button } from '../Button'

const ELEMENTS = ['rock', 'paper', 'scissors']

export const Table = function () {
    const [pick, setPick] = useState(null)
    const [housePick, setHousePick] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [result, setResult] = useState(null)

    //Context
    const { score, setScore } = useContext(ScoreContext)

    //Handle the user token selection
    async function handleSelection() {
        setPick(this.type)
        setIsPlaying(true)

        const housePick = await getHousePick()
        const result = getResult(this.type, housePick)

        setResult(result)
        console.log(setScore)
        if (result === 'win') {
            setScore(score + 1)
        } else if (result === 'lose') {
            setScore(score - 1)
        }
    }

    function getHousePick() {
        return new Promise((resolve, reject) => {
            let pick

            const interval = setInterval(() => {
                const random = Math.floor(Math.random() * 3)
                pick = ELEMENTS[random]
                setHousePick(pick)
            }, 60)

            setTimeout(() => {
                clearInterval(interval)
                resolve(pick)
            }, 2000)
        })
    }

    function getResult(pick, housePick) {
        if (pick === housePick) {
            return 'tie'
        }

        if (pick === 'rock') {
            if (housePick === 'paper') {
                return 'lose'
            } else {
                return 'win'
            }
        } else if (pick === 'paper') {
            if (housePick === 'scissors') {
                return 'lose'
            } else {
                return 'win'
            }
        } else {
            if (housePick === 'rock') {
                return 'lose'
            } else {
                return 'win'
            }
        }
    }

    function handlePlayAgain() {
        setResult(null)
        setIsPlaying(false)
    }

    return (
        <TableStyled bg={tableBg} selected={pick} isPlaying={isPlaying}>
            {!isPlaying ? (
                <>
                    <Token type="paper" handleClick={handleSelection} />
                    <Token type="scissors" handleClick={handleSelection} />
                    <Token
                        type="rock"
                        handleClick={handleSelection}
                        className="big"
                    />
                </>
            ) : (
                <>
                    <div>
                        <Token
                            type={pick}
                            winner={result === 'win'}
                            className="big"
                        />
                        <h4>You picked</h4>
                    </div>
                    <div>
                        <Token
                            type={housePick || null}
                            winner={result === 'lose'}
                        />
                        <h4>The house picked</h4>
                    </div>

                    {result && (
                        <div className="playAgain">
                            <h2>
                                {result === 'tie'
                                    ? "It's a Tie"
                                    : 'You ' + result}
                            </h2>
                            <Button
                                text="play again"
                                type="white"
                                handleClick={handlePlayAgain}
                            />
                        </div>
                    )}
                </>
            )}
        </TableStyled>
    )
}
