import React, {useState} from "react";

// setting state and using state


function App() {

  const [name, setName] = useState("");
  const [headingText, setText] = useState("");

  
  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }
  function changeText(event){
    setText(name);

    event.preventDefault();
  }


  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={changeText}>
      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
