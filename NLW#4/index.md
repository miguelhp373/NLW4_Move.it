<img src='logo.jpeg' width='100px' height='100px'>


# Next Level Week #4

[<img src='01.jpeg' width='30px' height='30px'/> &nbsp;  Day 01 - Fundamentos do React](#Day-01)
<br>
[<img src='02.jpeg' width='30px' height='30px'/> &nbsp;  Day 02 - Next.Js](#day-02)
<br>
[<img src='03.jpeg' width='30px' height='30px'/> &nbsp; Day 03 - Context API](#day-03)
<br>
[<img src='04.jpeg' width='30px' height='30px'/> &nbsp;   Day 04 - Use Effect e Notification](#day-04)

****
## __Day 01__

<br>

## *Criando o Projeto*
### Yarn:
```powershell
C:\Users\usuario\Documentos\NLW4> yarn create react-app moveit --template=typescript
```

### Npm:
```powershell
C:\Users\usuario\Documentos\NLW4> npx create-react-app moveit --template=typescript
```

<br>

## *Startando o Projeto*
### Yarn:
```powershell
C:\Users\usuario\Documentos\NLW4\moveit> yarn start
```

### Npm:
```powershell
C:\Users\usuario\Documentos\NLW4\moveit> npm start
```

<br>

## *Criando Componentes no React JS*
### Componente.tsx
```tsx
    export function MostrarTexto(){
	return(
		<div className='container'>
			<h1>Bem Vindo A RocketSeat</h1>
			<span>#Juntos Para o Proximo Nivel</span>
		</div>
	)
}
```

### App.tsx
```tsx
export function MostrarTexto(){
	return(
		<div className='container'>
			<h1>Bem Vindo A RocketSeat</h1>
			<span>#Juntos Para o Proximo Nivel</span>
		</div>
	)
})
}
```

### Index.tsx
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
```

****
## __Day 02__
## *Next.Js - Framework Para React*
<br>

## Criando o Projeto

## Yarn:
```powershell
C:\Users\user> yarn create next-app nomedoapp
```

## Npm:
```powershell
C:\Users\user> yarn create-next-app nomedoapp
```


<br>

## Startando o Projeto

## Yarn:
```powershell
C:\Users\user> yarn dev
```

## Npm:
```powershell
C:\Users\user> npm run dev
```

<br>

## Instalando Dependencias(Typescript, react-dom, e node)

## Yarn:
```powershell
C:\Users\user> yarn add typescript @types/react @types/react-dom @types/node -D
```

## Npm:
```powershell
C:\Users\user> npm install typescript @types/react @types/react-dom @types/node -D
```
****
## __Day 03__
<br>

## *Context API*
### fornece uma maneira de passar os dados de componentes sem ter que passar manualmente em todos os níveis.

<br>

### Context.tsx
```tsx
import { createContext, useState, ReactNode } from 'react';

interface ChallengeContextData{
    ChallengesCompleted:number;

}

interface ChallengesProviderProps{
    children:ReactNode;//propriedade de componentes react
}

//cria o context
export const ChallengesContext = createContext({} as ChallengeContextData)
//o texto segue o formato do interface passado la em cima

export function ChallengesProvider({children}:ChallengesProviderProps){//props

    const [ChallengesCompleted, SetChallengesCompleted] = useState(0)
    
//quando o componente recebe outro dentro dele se chama children e precisa passar props
    return(
        <ChallengesContext.Provider 
        value={
            ChallengesCompleted
              }>
            {children}
        </ChallengesContext.Provider>
    )
}
```
### App.tsx
```tsx
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function CompletedChallenges(){

    const { ChallengesCompleted } = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{ChallengesCompleted}</span>
        </div>
    );
}
```
****
## __Day 04__
<br>

## *Use Effect e Notification*
<br>

### App.tsx

```tsx
import { useEffect } from 'react';

useEffect(()=>{
        Notification.requestPermission();//pede permissão se pode notificar
    },[])//se houver um array vazio significa que ele só será mostrado uma vez em tela

new Audio('/notification.mp3').play();//toca o audio da notificação

//verifica se a notificação foi permitida para notificar
if(Notification.permission === 'granted'){
			//cria notificação
      new Notification('Move.it - Novo desafio 🎉',{
                body:`Valendo ${challenge.amount} xp`,
                icon:'favicon.png'                
           })
   }
```
