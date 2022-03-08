import React, {useState} from "react";

function App() {

  

  const time = new Date().toLocaleTimeString();

  var [currentTime, setTime] = useState(time);

  
  function refresh(){
    const updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime)
  }
  setInterval(refresh, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={refresh}>Latest Time</button>
    </div>
  );
}

export default App;
