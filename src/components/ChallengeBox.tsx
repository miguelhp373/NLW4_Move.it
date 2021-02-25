import { useContext } from 'react'//importa a context api do react
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    //chama a as funcoes e o estado do challenge context 
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    
    const { resetCountdown } = useContext(CountdownContext); //chama a funcao que reseta o timer do countdown context api

    function handleChallengeSucceeded() {//completa  o desafio e reinicia o cronometro
        completeChallenge()
        resetCountdown()
      }
    
      function handleChallengeFailed() {//reinicia o desafio e reseta o cronometro
        resetChallenge()
        resetCountdown()
      }


return(
    <div className={styles.ChallengeBoxContainer}>

        {activeChallenge?(//cronometro ativo mostra essa parte
            <div className={styles.ChallegeActive}>
                <header>Ganhe {activeChallenge.amount} xp</header>

                <main>
                    <img src={`icons/${activeChallenge.type}.svg`} alt="Dumb Bells Hand"/>
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>
            <footer>
                <button 
                type='button'
                className={styles.ChallengeFailedButton}
                onClick = {handleChallengeFailed}//falha o desafio
                >
                    Falhei
                </button>

                <button
                 type='button'
                 className={styles.ChallengeSuccededButton}
                 onClick = {handleChallengeSucceeded}//completa o desafio
                 >
                    Completei
                </button>

            </footer>
            </div>
        ):(//cronometro desativado
            <div className={styles.ChallegeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Avance de level completando desafios
            </p>
        </div>
        )}

    </div>
)
}