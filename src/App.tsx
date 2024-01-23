/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */

import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import Nav from './components/navbar';
import Etc from './pages/Etc';
import {css} from '@emotion/react'
import Footer from './components/footer';
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

const App = () =>{
  return(
    <div className='app'>
      <div css={wrapper}>
        <Nav/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path="/proj/:projnum" Component = {Project} />
          <Route path="/etc" Component = {Etc} />
          {/* 파라미터 프로젝트 넘버 붙이기 */}
        </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  );
};
export default App;
const wrapper=css`
  height: 100vh;
  width:100vw;
`;

