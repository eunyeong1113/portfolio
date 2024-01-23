/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';

const AboutME = () => {
    return(
        <div css={back}>
            <div css={img}>
                <img src="/me.png" alt="aboutme" css={size}/>
            </div>
            <div css={text}>
                <div css={main}>고객 중심적인 개발자</div>
                <div css={sub}>
                    소프트웨어가 사용자에게 어떤 가치를 제공할 수 있는지
                    항상 고민하며 고객들이 더 편리하게 이용하고 
                    만족할 수 있는 제품을 개발하고자 합니다.
                </div>
            </div>
            <div css={table}>
                <ul css={ul}>
                    <li css={th}>이름</li>
                    <li css={td}>이은영</li>
                </ul>
                <ul css={ul}>
                    <li css={th}>E-MAIL</li>
                    <li css={td}>eylee1113@naver.com</li>
                </ul>
                <ul css={ul}>
                    <li css={th}>MBTI</li>
                    <li css={td}>ESFP</li>
                </ul>
            </div>
        </div>
    );
} 
export default AboutME;
const back = css`
    height:70vh;
    padding: 13vh 5vh;
    @media screen and (max-width: 768px) {
        margin-top:5vh;
        margin-bottom:5vh;
        padding:0vh 0vh;
        height:120vh;
        
    }
`;
const img=css`
    float:right;    
    // width:100em;
    @media screen and (max-width: 768px) {
        float: none;
        text-align: center;
        padding-right:0em;
    }
`;
const size=css`
    @media screen and (max-width: 768px) {
        width:35vh;
    }
`;
const text=css`
    padding-top: 5vh;
    // float:left;
    width:32vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5vh;
    color: #4A4A4A;
    @media screen and (max-width: 768px) {
        // margin-top:5vh;
        width:auto;
        text-align:center;
    }
`;
const main=css`
    word-break:keep-all
`;
const sub=css`
    color:#606060;
    margin-top:3vh;
    font-size: 3vh;
    line-height: 5vh;
    word-break:keep-all
`;
const table=css`
position: absolute;
bottom: 0px;
padding-bottom:15vh;

font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 3vh;
color: #4A4A4A;
@media screen and (max-width: 768px) {
        margin-top:3vh;
        position: static;
        bottom: auto;
        padding-bottom:0vh;
        text-align:center;
        display: grid
    }
`;

const th=css`
    padding-bottom:1vh;
    width:8vw;
    display:inline-block;
    @media screen and (max-width: 768px) {
        display:contents;
        text-align:center;
        padding-bottom:0vh;
    }
`;
const td=css`
    padding-bottom:1vh;
    display:inline;
    @media screen and (max-width: 768px) {
        text-align:center;
        display:block;
        color:#606060;
        margin-top:1vh;
        font-size:2.8vh;
        padding-bottom:0vh;
    }
`;
const ul=css`
    list-style-type: none;
    padding-left:0px;
    
`;



