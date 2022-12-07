import React from 'react';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Content from './components/Content';

function App() {
  return (
    <div className='main--container'>
      <Buttons />
      <Cards />
      <Content />
    </div>
  );
}

export default App;
