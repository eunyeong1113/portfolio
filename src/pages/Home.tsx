/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React from "react";
import AboutME from "../components/Home/aboutMe";
import { css } from "@emotion/react";

 
const Home = () => {
  return(
    <div css={wrap}>
      <AboutME/>
    </div>
  );
};
export default Home;
const wrap = css`
  min-height: 100%;
  height: auto;
`;