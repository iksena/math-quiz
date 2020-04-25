import React from 'react';

import QuizContainer from './Containers/Quiz.container';
import './App.css';
import question from './Fixtures/Question';

function App() {
  return (
    <div className="App">
      <QuizContainer {...question} />
    </div>
  );
}

export default App;
