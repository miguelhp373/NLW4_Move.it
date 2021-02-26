import { createContext, useState, ReactNode, useEffect } from 'react';

import challenges from '../../challenges.json';//importa o json dos desafios

import Cookies from 'js-cookie' //api amigavel para manipulação de cookie
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge{//json types interface
    type:'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData{//define os tipos de dados dos componentes da challenge context
    level:number;
    CurrentExperience:number;
    experienceToNextLevel:number;
    ChallengesCompleted:number;
    activeChallenge:Challenge;
    levelUp:() => void;
    startNewChallenge:() => void;
    resetChallenge:() => void;
    completeChallenge:()=> void;
    closeLevelUpModal: ()=> void;
}


interface ChallengesProviderProps{
    children:ReactNode;//propriedade de componentes react
    level:number;
    currentExperience:number;
    challengesCompleted:number;
}



//cria o context
export const ChallengesContext = createContext({} as ChallengeContextData)//o texto segue o formato do interface passado la em cima

export function ChallengesProvider({
    children,
   ...rest
}:ChallengesProviderProps){//props
    //hooks react UseState
    const [level, setlevel] = useState(rest.level??1);
    const [CurrentExperience, setCurrentExperience] = useState(rest.currentExperience??0);
    const [ChallengesCompleted, SetChallengesCompleted] = useState(rest.currentExperience??0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const [isLevelupModalOpen,SetIsLevelupModalOpen] = useState(false)


    const experienceToNextLevel = Math.pow((level + 1) * 4 ,2)//potencia para uppar de level

    useEffect(()=>{
        Notification.requestPermission();//pede permissão se pode notificar
    },[])//se houver um array vazio significa que ele só será mostrado uma vez em tela

    useEffect(()=>{
        Cookies.set('level',String(level));
        Cookies.set('currentExperience',String(CurrentExperience));
        Cookies.set('challengesCompleted',String(ChallengesCompleted));
    },[level,CurrentExperience,ChallengesCompleted]);

    function levelUp(){
        setlevel(level + 1)//sobe de nivel
        SetIsLevelupModalOpen(true)

    }
    
    function startNewChallenge(){
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length);//sorteia um desafio aletorio
        const challenge = challenges[randomChallengesIndex];
        setActiveChallenge(challenge)//ativa o desafio
        
        new Audio('/notification.mp3').play();//toca o audio da notificação

        if(Notification.permission === 'granted'){//verifica se a notificação foi permitida para notificar
            new Notification('Move.it - Novo desafio 🎉',{//cria notificação
                body:`Valendo ${challenge.amount} xp`,
                icon:'favicon.png'
                
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null)//define desafio como nulo para desaparecer da tela
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = CurrentExperience + amount;//soma o xp

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;//se passar o numero de xp ele faz uma regra de negocio para passar os pontos excedidos para o proximo nivel
            levelUp()//upa de level
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        SetChallengesCompleted(ChallengesCompleted + 1);//soma o numero de desafios completados
    }

    function closeLevelUpModal(){
        SetIsLevelupModalOpen(false);
    }





    //quando o componente recebe outro dentro dele se chama children e precisa passar props
    return(
        //esse componente fica por volta de tds os outros para se utilizar o context
        <ChallengesContext.Provider 
        value={//exporta os componentes como se fossem variaveis globais em todo projeto
            {
            level,
            CurrentExperience,
            ChallengesCompleted,
            experienceToNextLevel,
            activeChallenge,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completeChallenge,
            closeLevelUpModal
            }
              }>
            {children}
            {isLevelupModalOpen && <LevelUpModal/> /*if and else*/}
        </ChallengesContext.Provider>
        //children são os componentes que ficam dentro do ChallengesContextProvider no _app.tsx
    )
}