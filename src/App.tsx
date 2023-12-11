import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import Nav from './components/navbar';
import Etc from './pages/Etc';
import {css} from '@emotion/react'
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

const App = () =>{
  return(
    <div>
      <Nav/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path="/proj/:projnum" Component = {Project} />
        <Route path="/etc" Component = {Etc} />
        {/* 파라미터 프로젝트 넘버 붙이기 */}
      </Routes>
    </div>
  );
};
export default App;

