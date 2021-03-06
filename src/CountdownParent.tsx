import { useState } from 'react';
import { CountDownComponent } from './CountdownComponent';
import { CountDownProps } from './interfaces';



export const CountDownParent=()=>{
    const [nb,setNb] = useState(0)
    let CountDownElement:CountDownProps={
        nb:(nb),
        onDone:(timer)=>{
          if (timer === 0){
            setNb(nb+1);
          }
        }
      }
    return (
        <div className="App">
          <CountDownComponent {...CountDownElement}/>
        </div>
      );

}