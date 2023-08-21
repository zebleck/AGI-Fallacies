// App.tsx
import React from 'react';
import './App.css';
import fallacies from './fallacies';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>AGI Fallacies</h1>
      {fallacies.map((fallacy, index) => (
        <div key={index} className="fallacy">
          <h2>{fallacy.name}</h2>
          <p><strong>Description:</strong> {fallacy.description}</p>
          <p><strong>Counter:</strong> {fallacy.counter}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
