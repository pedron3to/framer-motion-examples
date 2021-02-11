import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";


import Head from "next/head";

//import Header from "../Header";
import Footer from "../Footer";

import ModalVideo from "../ModalVideo";

import GlobalContext from "../../context/GlobalContext";

//import GlobalStyle from "../../utils/globalStyle";

//import imgFavicon from "../../assets/favicon.png";

import { theme as baseTheme } from '../../';

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 1.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext }) => {
   return (
    <>
     
        <Head>
          <title>Claramente</title>
          {/* <link rel="icon" type="image/png" href={imgFavicon} /> */}
        </Head>
        <div>{children}
          <Footer/>
        </div>
     
      
    </>
  );
};

export default Layout;
