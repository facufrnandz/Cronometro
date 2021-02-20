
import React, {useState} from 'react';
import './App.css';


const Display = ({hours, minutes, seconds}) =>{

  return(

    <p>{hours}:{minutes}:{seconds}</p>
  );
}

const Button = ({setTimer, text}) =>{

  return(

    <button onClick= {setTimer}>{text}</button>
  );
}

function App() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  if (isActive){
    if (seconds < 59){
      setTimeout(()=>setSeconds(seconds + 1),200);
    }
    
    if (seconds === 59){
      setSeconds(0)
      setTimeout(()=> setMinutes(minutes + 1), 200);
    }
    if (minutes === 59){
      setMinutes(0);
      setTimeout(()=> setHours(minutes + 1), 200);
    }

  }

  const timerOn = () =>{
    setIsActive(true);
  }

  const timerOff = () =>{
    setIsActive(false);
  }

  const setToZero = () =>{
    setTimeout(()=> setHours(0), 200);
    setTimeout(()=> setMinutes(0), 200);
    setTimeout(()=>setSeconds(0), 200);
    timerOff();
  }



  return (
    
    <div>
      
      <Display hours={hours} minutes={minutes} seconds={seconds}/>
      <Button setTimer = {timerOn} text = 'Iniciar'/>
      <Button setTimer = {timerOff} text = 'Parar'/>
      <Button setTimer = {setToZero} text = 'Reiniciar'/>
     
    </div>
    
  );
}

export default App;
