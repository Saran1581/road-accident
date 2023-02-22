import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import First from './components/first';
import Second from '../src/final/second';
import Header from './components/header';
import Form from './components/form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<First />} />
        <Route path = '/first' element = {<First />} />
        <Route path = '/second' element = {<Second />} />
        <Route path = '/header' element = {<Header />} />
        <Route path = '/form' element = {<Form />} />
        
      </Routes>
    </Router>
  );
}

export default App;
