import React from "react";
import styled from "styled-components";

import mainPic from "./assets/img/mainPicBig.jpeg";
import WhyNeed from "./pages/whyNeed";
import Banner from "./components/banner";
import Service from "./pages/service";
import Guide from "./pages/guide";
import Process from "./pages/process";
import Footer from "./components/footer";

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainPic = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mainPic});
  background-size: cover;
  background-position: center;
`;

function App() {
  return (
    <AppContainer>
      <MainPic></MainPic>
      <WhyNeed></WhyNeed>
      <Banner></Banner>
      <Service></Service>
      <Guide></Guide>
      <Process></Process>
      <Footer></Footer>
    </AppContainer>
  );
}

export default App;
