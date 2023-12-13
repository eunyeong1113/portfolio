/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {css} from '@emotion/react';
 
const Nav = () => {
    // const [isHovering,setIsHovering] = useState(false);
    //  const handleMouseOver = () => {
    //     setIsHovering(true);
    // };    

    // const handleMouseOut = () => {
    //     setIsHovering(false);
    // };
    // var name_view = ["HOME", "PROJECT1","PROJECT2","PROJECT3","PROJECT4","Etc."];
    // var name_hover = ["HOME", "공부하는 습관","MINT","밥추","PROJECT4","Etc."];
  return(
    <><div css={back}>
          <img src="/Logo.png" alt="로고 이미지" css={img} />
          <div css={nav}>
              {/* {
        name_view.map((name)=>{
            return(
                <span
                    css={isHovering? hover : ""}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    <a css={link}> {name} </a>
                </span>
            )
        })
    }
     {
        name_hover.map((name)=>{
            return(
                <span
                    css={isHovering? view : hover}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    <a css={link}> {name} </a>
                </span>
            )
        })
    } */}
              <span css={view}>
                  <Link to='/' css={link}> HOME </Link>
              </span>
              
              <span className="hide">
                   <Link to='/proj/1' css={link}> PROJECT1 </Link>
              </span>
              <span className="show">
                  <Link to='/proj/1' css={link}> 공부하는 습관 </Link>
              </span>
              <span className="hide">
                <Link to='/proj/2' css={link}> PROJECT2 </Link>
              </span>
              <span className="show">
                  <Link to='/proj/2' css={link}> MINT </Link>
              </span>
               <span className="hide">
                  <Link to='/proj/3' css={link}> PROJECT3 </Link>
              </span>
              <span className="show">
                  <Link to='/proj/3' css={link}> 밥추 </Link>
              </span>
              <span css={view}>
                  <Link to='/proj/4' css={link}> PROJECT4 </Link>
              </span>
              <span css={view}>
                  <Link to='/etc' css={link}> Etc. </Link>
              </span>

              
          </div>
      </div>
      <style>{`
        span.hide:hover{
           display: none;
        }
        span.hide:hover + .show{
            display: flex;
            text-decoration : underline;
        }
        span.show{
            display: none;
        }
        `}  
      </style>
      </>
  );
  
};

const view = css`
    &:hover {
        text-decoration : underline;
    }
`;
const hover = css`
    &:hover {
        display: none;
    }
`;
const link = css`
    text-decoration: none;  
    color: inherit;
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
    width: 150px;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

const back = css`
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    font-family: "Pretendard";
    width: 100%;
    height: 60px;
    background-color: #9DC3E7;
    box-shadow: 0px 5px 10px rgba(136, 136, 136, 0.25);
    color: #ffffff;
`;
const nav = css`
    z-index: 5;
    // position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Pretendard";
    margin-left: 50px;
    margin-right: 100px;
    width: 70%;
`;
const img = css`
    height: 25px;
    margin-left: 25px;

`;
export default Nav;

