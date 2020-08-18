import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



const currTime = new Date().getHours()
const link = 'https://google.com'
let Greeting=''
const cssStyle = {

}
const h1Style ={
  color: 'Black'
}

if(currTime >=1 && currTime< 12) {
    Greeting =" Good Morning";
    cssStyle.color="green";
}
 else if (currTime >=12 && currTime <14) {
   Greeting = " Good Afternoon";
   cssStyle.color="Orange";
 }
 else if (currTime >=15 && currTime <19) {
  Greeting = " Good Evening";
  cssStyle.color="Red";
} else {
   Greeting = "Good Night";
   cssStyle.color="Black"
 }

function App() {
  const [name,setName] = useState('Sir')
    return (
    <div className="App">
      <header className="App-header">
      <div>
     <h1 style={h1Style}> Hi: {name}  </h1>
      <input type="text"
      value={name}
      placeholder="Enter your name"
      onChange={e => setName(e.target.value)}></input>
      </div>
      <span style= {cssStyle}>
      <h2>  {Greeting}</h2>
        </span>
      </header>
    </div>
  );
}

export default App;
