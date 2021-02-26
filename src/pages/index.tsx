import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}

export default function Home(props:HomeProps) {

  console.log(props)
  
  return (
    <ChallengesProvider 
    level = {props.level}
    currentExperience = {props.currentExperience}
    challengesCompleted = {props.challengesCompleted}
    >
    <div className={styles.container}>
      <Head>
        <title>Home | Move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}

//isso executa no server node
export const getServerSideProps: GetServerSideProps = async(ctx) =>{//busca os dados da camada intermediaria da aplicação
  const user ={
    level :2,
    currentExperience: 50,
    challengesCompleted:2
  }

  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  
  return{
      props:{
        level:Number(level),
        currentExperience:Number(currentExperience),
        challengesCompleted:Number(challengesCompleted)
      }
  }
}
