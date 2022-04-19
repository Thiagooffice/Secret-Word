import './GameOver.css'

export default function GameOver({retry}){
    return(
        <div>
            <h1>Game Over</h1>
             <button onClick={retry} >Resetar Jogo</button>
        </div>
    )
}