import React from 'react';
import './App.css';
import { CountDownComponent } from './countdown';
import { CountDownProps } from './interfaces';

let CountDownElement:CountDownProps={
  nb:0,
  onDone:(timer)=>{
    console.log(timer)
    if (timer === 0){
      CountDownElement.nb++;
      console.log("ondone CountDownElement.nb   " + CountDownElement.nb);
      console.dir('CountDownElement ' + JSON.stringify(CountDownElement))

      
    }
  }
}
console.log('CountDownElement ' + JSON.stringify(CountDownElement))

function App() {
  
  return (
    <div className="App">
      <CountDownComponent {...CountDownElement}/>
      <div>Hello world</div>
    
    </div>
  );
}

export default App;
