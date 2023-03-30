import { keyframes } from 'styled-components'

export const Wiggle = keyframes`
    0% { transform: translate(2px, -2px); }
    25% { transform: translate(-2px, 2px); }
    75% { transform: translate(-2px, 2px); }
    100% { transform: translate(2px, 2px); }
`
export const Ticker = keyframes`
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50vw, 0, 0); }
`