import React from 'react';
import './App.css';
import DeckProvider from './context/deckContext';
import DeckView from './components/DeckView'

function App() {
  return (
    <div className="App">
      <DeckProvider> 
        <DeckView/>
      </DeckProvider>
    </div>
  );
}

export default App;
