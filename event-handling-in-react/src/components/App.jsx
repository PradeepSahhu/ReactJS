import React,{useState} from "react";

function App() {
  
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick(){
    setHeadingText("Submitted");
  }
  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor: isMouseOver ? "black" : "white" }} 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} 
      onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
// import React, {useState} from "react";
 
// function App() {
 
//   const [color, changeColor] = useState({backgroundColor: 'white'});
 
//   function mouseOver() {
//     changeColor({backgroundColor: 'black'})
//   }
 
//   function mouseOut() {
//     changeColor({backgroundColor: 'white'})
//   }
 
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button style={color} onMouseOver={mouseOver} onMouseOut={mouseOut}>Submit</button>
//     </div>
//   );
// }
 
// export default App;