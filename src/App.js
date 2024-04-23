import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/form/LoginForm';

function App() {

  return (
    <div className="App">
      <LoginForm
        placeholderLogin='E-mail'
        placeholderPassword='Senha'
      />
    </div>
  );
}

export default App;
