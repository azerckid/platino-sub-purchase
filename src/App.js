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
  @media (max-width: 1024px) {
    width: 100vw;
  }
`;
const MainPic = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(${mainPic});
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    width: 100vw;
    height: 100vh;
    background-color: red;
  }
  div:nth-child(1) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: 800;
    color: white;
    @media (max-width: 1024px) {
      font-size: 28px;
    }
  }

  div:nth-child(2) {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 200;
    color: white;
    @media (max-width: 1024px) {
      width: 80%;
      font-size: 26px;
    }
  }
  div:nth-child(3) {
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 800;
    color: white;
    @media (max-width: 1024px) {
      width: 90%;
      top: 60%;
      font-size: 34px;
      font-weight: 600;
    }
  }
`;

function App() {
  return (
    <AppContainer>
      <MainPic>
        <div>KHD 구매대행</div>
        <div>"글로벌 쇼핑 경험을 높이는 전문 해외직구 파트너"</div>
        <div>
          <span>KHD 구매대행과 함께</span>
        </div>
      </MainPic>
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
