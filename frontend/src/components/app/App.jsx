import React from 'react';
import Header from '../header/Header';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'


import Add from '../../pages/add/Add'
import Table from '../../pages/table/Table'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Router>        
            <Routes>
              <Route path="*" element={ <Navigate to='/add'/> }/>
              <Route path="/add" element={ <Add/> }/>
              <Route path='/table' element={ <Table/> }/>
            </Routes> 
        </Router>
      </div>
    </div>
  );
}

export default App;
