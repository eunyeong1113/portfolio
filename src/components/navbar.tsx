/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {css} from '@emotion/react';
import styled from "@emotion/styled/macro";
import { FaBars } from "react-icons/fa";
 

interface NavManuProps {
  isToggleOpen:boolean;
}
const Nav = () => {
      const [isToggleOpen, setIsToggleOpen] = useState(false);

        const handleToggleOpen = () => {
            setIsToggleOpen(!isToggleOpen);
        };

  return(
    <>
     <StyledHeader>
          <img src="/Logo.png" alt="로고 이미지" css={img} />
          <div css={nav}>
              <NavManu isToggleOpen={isToggleOpen}>
                <li>
                    <span css={view}>
                         <Link to='/' css={link}> HOME </Link>
                    </span>
                </li>
                <li>
                    <span className="hide">
                        <Link to='/proj/1' css={link}> PROJECT1 </Link>
                    </span>
                    <span className="show">
                        <Link to='/proj/1' css={link}> 공부하는 습관 </Link>
                    </span>
                </li>
                <li>
                    <span className="hide">
                        <Link to='/proj/2' css={link}> PROJECT2 </Link>
                    </span>
                    <span className="show">
                        <Link to='/proj/2' css={link}> MINT </Link>
                    </span>
                </li>
                <li>
                    <span className="hide">
                        <Link to='/proj/3' css={link}> PROJECT3 </Link>
                    </span>
                    <span className="show">
                        <Link to='/proj/3' css={link}> 밥추 </Link>
                    </span>
                </li>
                <li>
                    <span css={view}>
                        <Link to='/proj/4' css={link}> PROJECT4 </Link>
                    </span>
                </li>
                <li> 
                    <span css={view}>
                        <Link to='/etc' css={link}> Etc. </Link>
                    </span>
                </li>
                </NavManu>
                <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
                </div>
        </StyledHeader>
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
const StyledHeader = styled.header`
  font-family: "Pretendard";
  color: #ffffff;
  background-color: #9DC3E7;
  box-shadow: 0px 5px 10px rgba(136, 136, 136, 0.25);
  // width: 100%;
  // height:60px;
  // padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;
    align-items: center;

  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    
    justify-content: center;
    .menuToggleBtn {
      display: flex;
    }
  }
`;
const NavManu = styled.ul<NavManuProps>`
  list-style: none;
  display: flex;

  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
    
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    // height: 50px;
    margin-top: 20px;
    li{
      height: 50px;
    }
  }
`;

const view = css`
    &:hover {
        text-decoration : underline;
    }
`;
const link = css`
    text-decoration: none;  
    color: inherit;
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
    width: 150px;
    // height: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
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
    // width: 70%;
`;
const img = css`
    height: 25px;
    margin-left: 25px;

`;
export default Nav;

