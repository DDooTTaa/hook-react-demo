import React, { useState } from 'react';

const content= [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

const useTabs = (initialTab:number, allTabs:Array<any>) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem : allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

//function App() {
const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div>
      {content.map((section,index) => (
      <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>)
      )}
      
      <div>
      {currentItem.content}
      </div>
    </div>
  );
}

export default App;
