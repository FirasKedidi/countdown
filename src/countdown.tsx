import React, { useEffect, useState } from "react";
import { CountDownProps } from "./interfaces";

export const CountDownComponent = (props:CountDownProps)=>{
    const [timer,setTimer] = useState(10);
    props.onDone(timer);
    React.useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
      }, [timer]);
    useEffect(()=>{
      setTimer(10);
    },[props.nb])
    
      return (
        <div className="App">
          <div>Countdown: {timer}s</div>
        </div>
      );
}

