import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'
export function Profile(){
    const { level } = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/64207491?s=460&u=e31d1eb0151b6759be2ba8a5f8951a799e62ec5b&v=4" alt="profile-image"/>
            <div>
                <strong>Miguel Henrique</strong>
                
                <p>
                    <img src="icons/level.svg" alt="level-icon"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}