import './Game.css'

export default function Game({verifyLetter}){
    return(
        <div>
            <h1>Game</h1>
             <button onClick={verifyLetter} >Finalizar Jogo</button>
        </div>
    )
}