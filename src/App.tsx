import React, { useEffect, useRef, useState } from 'react';


const useTitle = (initialTitle:string) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle:HTMLTitleElement | null = document.querySelector("title");
    if (!htmlTitle) return;
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
}

//function App() {
const App = () => {
  const potato:any = useRef();
  if (potato.current !== null) { return null; }
  setTimeout(() => (potato.current.focus()), 3000);
  return (
    <div>
    <div>HI</div>
    <input ref={potato} placeholder="blabla"/>
    </div>
  );
}

export default App;
