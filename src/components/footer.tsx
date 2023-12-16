/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <div css={footer}>
            <div css={footer__contents}></div>
            <Link to={"/"} css={link}> 
                <div css={footer__logo}>
                    <img src="/Logo blue.png" alt="로고 이미지" css={img}/>
                    <span>© EunYeong Portfolio</span>
                </div>
            </Link>
        </div>
    );
} 
export default Footer;
const footer = css`
    background-color: #fcfcfc;
    width: 100%;
    // position : relative;
    // transform : translateY(0%);
    // bottom:0px;
    
`;
const footer__contents = css`
    background-color: #ffffff;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
`;
const footer__logo = css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #cdcdcd;
    // gap: 64px;
    color: #6c757d;
`;
const img=css`
    margin: 2rem 0.5rem;
    width: 36px;
`;
const link =css`
    text-decoration: none;  
    color: inherit;
`;