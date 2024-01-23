/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Footer from "../components/footer";

import AboutME from "../components/Home/aboutMe";
import TechStack from "../components/Home/techStack";

 
const Home = () => {
  return(
    <div css={wrap}>
      <AboutME/>
      <TechStack/>
    </div>
  );
};
export default Home;
const wrap = css`
  margin-left:10vw;
  margin-right:10vw;
`;