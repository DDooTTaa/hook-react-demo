import React, { useState } from 'react';

const useInput = (initial: string, validator:Function) => {
  const [value, setValue] = useState(initial);
  const onChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof event)
    const { 
      target: { value }
    } = event;
    let willUpdate:boolean = true;
    
    willUpdate = validator(value);
    
    if (willUpdate){
      setValue(value);
      console.log(value);
    }
  };
  return { value, onChange };
};


//function App() {
const App = () => {
  const maxLen = (value:string) => value.includes("@");
  const name = useInput("Mr.", maxLen);
  //  const [item, setItem] = useState(3);
  return (
    <div>
      {/* HI {item} 
       <button onClick={() => setItem(item + 1)}>Increment</button>
      <button onClick={() => setItem(item - 1)}>Decreament</button>
      <br />
       */}
      <input placeholder="Name" {...name} {...onchange} />
    </div>
  );
}

export default App;
