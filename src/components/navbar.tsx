import React from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import {css} from '@emotion/react';
 
const Nav = () => {
  return(
    <div >
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
            <Link to='/proj/4' css={{style}}>PROJECT4</Link> 
        </div>
        <Div>
            <Link to='/etc' css={{style}}>Etc.</Link> 
        </Div>
    </div>
  );
};

const style = css`
    text-decoration: none;  
    color: inherit;
`;
const Div = styled.div`
    color: #5f5f00;
    // text-align: center;  
    text-decoration: none;  
    color: inherit; 
`;
const div = styled.link`
    text-decoration: none;  
    color: inherit; 
`;
export default Nav;

