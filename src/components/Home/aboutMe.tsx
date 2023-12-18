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
            <div>
                <table>
                    <tr>
                        <td>이름</td>
                        <td>이은영</td>
                    </tr>
                    <tr>
                        <td>E-MAIL</td>
                        <td>eylee1113@naver.com</td>
                    </tr>
                    <tr>
                        <td>MBTI</td>
                        <td>ESFP</td>
                    </tr>
                </table>
            </div>
        </div>
    );
} 
export default AboutME;
const back = css`
padding: 13vh 12vw 5vh;
@media screen and (max-width: 768px) {
        // width:100vh;
        padding: 5vh 5vw;
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
    width:50vh;
    @media screen and (max-width: 768px) {
        width:45vh;
    }
`;
const text=css`
    // float:left;
    width:65vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5vh;
    color: #4A4A4A;
`;
const main=css`
`;
const sub=css`
    margin-top:1rem;
    font-size: 3vh;
    line-height: 2rem;
    word-break:keep-all
`;