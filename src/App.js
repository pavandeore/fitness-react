import React from 'react';
import './App.css';

import Header from './components/header';
import MainBody from './components/bodymain';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <MainBody />
        <Footer />
    </div>
  );
}

export default App;
