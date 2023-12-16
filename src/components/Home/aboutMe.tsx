/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';

const AboutME = () => {
    return(
        <div css={back}>
            <div>
                <img src="/me.png" alt="aboutme" />
            </div>
            <div>
                <div>고객 중심적인 개발자</div>
                <div>
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
    width:100%;
    /* 고객 중심적인 개발자 */
width: 429px;
height: 76px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 60px;

color: #4A4A4A;
`;