import React from "react";
import styled from "styled-components";

import guidePic_01 from "../assets/img/guidePic_01.png";
import guidePic_02 from "../assets/img/guidePic_02.png";
import guidePic_03 from "../assets/img/guidePic_03.png";
import guidePic_04 from "../assets/img/guidePic_04.png";
import guidePic_05 from "../assets/img/guidePic_05.png";
import guidePic_06 from "../assets/img/guidePic_06.png";

const GuideContainer = styled.div`
  width: 1280px;
  @media (max-width: 1024px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const GuideTitle = styled.div`
  width: 100%;
  height: 254px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 35px;
    font-weight: 800;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
`;
const GuideContentBox = styled.div`
  width: 100%;
  height: 313px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const GuideContentItem = styled.div`
  width: 380px;
  height: 313px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100vw;
    height: 100%;
    margin-bottom: 20px;
  }
`;
const GuideContentItemPic = styled.div`
  width: 350px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: #5e76ff;
  @media (max-width: 1024px) {
    width: 80vw;
    height: 140px;
  }
  div:nth-child(1) {
    width: 100px;
    height: 100px;
    background-image: url(${(props) => props.pic1});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
      width: 80px;
      height: 80px;
    }
  }
  div:nth-child(2) {
    width: 100px;
    height: 100px;
    background-image: url(${(props) => props.pic2});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
      width: 80px;
      height: 80px;
    }
  }
`;
const GuideContentItemTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
`;
const GuideContentItemText = styled.div`
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 1024px) {
    width: 80vw;
    text-align: center;
    }
    }
`;

const Guide = () => {
  return (
    <GuideContainer>
      <GuideTitle>
        <h1>구매대행 관련가이드</h1>
      </GuideTitle>
      <GuideContentBox>
        <GuideContentItem>
          <GuideContentItemPic pic1={guidePic_01} pic2={guidePic_02}>
            <div></div>
            <div></div>
          </GuideContentItemPic>
          <GuideContentItemTitle>
            배송비용안내 / 부가서비스
          </GuideContentItemTitle>
          <GuideContentItemText>
            배송비용과 부가 서비스에 대한 정보를 제공합니다.
          </GuideContentItemText>
        </GuideContentItem>
        <GuideContentItem>
          <GuideContentItemPic pic1={guidePic_03} pic2={guidePic_04}>
            <div></div>
            <div></div>
          </GuideContentItemPic>
          <GuideContentItemTitle>교환반품 / 수입금지품목</GuideContentItemTitle>
          <GuideContentItemText>
            제품 교환, 반품 절차 및 수입 금지 품목 정보를 안내합니다.
          </GuideContentItemText>
        </GuideContentItem>
        <GuideContentItem>
          <GuideContentItemPic pic1={guidePic_05} pic2={guidePic_06}>
            <div></div>
            <div></div>
          </GuideContentItemPic>
          <GuideContentItemTitle>
            사이즈표 / 파파고 번역기
          </GuideContentItemTitle>
          <GuideContentItemText>
            제품 사이즈 차트 및 파파고 번역기 기능을 제공합니다.
          </GuideContentItemText>
        </GuideContentItem>
      </GuideContentBox>
    </GuideContainer>
  );
};

export default Guide;
