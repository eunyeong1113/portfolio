import React from "react";
import { Link } from "react-router-dom";

 
const Nav = () => {
  return(
    <div>
        <div>
            <Link to='/'>HOME</Link> 
        </div>
        <div>
            <Link to='/proj/1'>PROJECT1</Link> 
        </div>
        <div>      
            <Link to='/proj/2'>PROJECT2</Link> 
        </div>
        <div>
            <Link to='/proj/3'>PROJECT3</Link> 
        </div>
        <div>
            <Link to='/proj/4'>PROJECT4</Link> 
        </div>
        <div>
            <Link to='/etc'>Etc.</Link> 
        </div>
      
      
      
    </div>
  );
};
export default Nav;