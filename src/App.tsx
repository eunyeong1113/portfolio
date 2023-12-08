import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

const App = () =>{
  return(
    <div>
      <Route path='/' Component={Home}/>
      <Route path="/project:pronum" Component = {Project} />
    </div>
  );
};
export default App;

