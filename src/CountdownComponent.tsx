import React, { useEffect, useState } from "react";
import { CountDownProps } from "./interfaces";

export const CountDownComponent = (props:CountDownProps)=>{
    let [timer,setTimer] = useState(30);
    
    React.useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
        props.onDone(timer);
      }, [timer]);
    useEffect(()=>{
      setTimer(30);
    },[props])
    
      return (
        <div className="App">
          <div>Countdown: {timer}s</div>
        </div>
      );
}

