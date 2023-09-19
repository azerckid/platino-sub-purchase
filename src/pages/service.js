import React from "react";
import styled from "styled-components";

import servicePic_01 from "../assets/img/serviceIllust_01.jpg";
import servicePic_02 from "../assets/img/serviceIllust_02.jpg";

const ServiceContainer = styled.div`
  width: 1280px;
  @media (max-width: 1024px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ServiceTitle = styled.div`
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
      font-size: 25px;
    }
  }
`;
const ServiceContentBox = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }
`;
const ServiceContentItem = styled.div`
  width: 640px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100vw;
    height: 100%;
  }
`;
const ServiceContentItemPic = styled.div`
  width: 640px;
  height: 334px;
  background-image: url(${(props) => props.pic});
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    width: 300px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
const ServiceContentItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1024px) {
    width: 80vw;
    align-items: center;
  }

  div:nth-child(1) {
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
  div:nth-child(2) {
    padding-right: 50px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 40px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  div:nth-child(3) {
    padding-right: 20px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;

const Service = () => {
  return (
    <ServiceContainer>
      <ServiceTitle>
        <h1>구매대행 관련서비스</h1>
      </ServiceTitle>
      <ServiceContentBox>
        <ServiceContentItem>
          <ServiceContentItemPic pic={servicePic_01}></ServiceContentItemPic>
        </ServiceContentItem>
        <ServiceContentItem>
          <ServiceContentItemText>
            <div>배송대행 / 구매대행</div>
            <div>
              해외 쇼핑에서 상품 구매후 배송대행을 신청하면 현지에서 안전하게
              배송해 드립니다.
            </div>
            <div>
              해외 구매가 어려우신 분들은 대행신청시 구매부터 배송까지
              서비스해드립니다.
            </div>
          </ServiceContentItemText>
        </ServiceContentItem>
      </ServiceContentBox>
      <ServiceContentBox>
        <ServiceContentItem>
          <ServiceContentItemText>
            <div>대량신청 / 시장조사</div>
            <div>
              많은 주문을 신청하기 어렵다면 엑셀로 작업 후 업로드하여 한번에
              가능합니다.
            </div>
            <div>
              중국 방문이 어려우신 분들은 시장 조사부터 공장 섭외 및 생산까지
              도와드립니다.
            </div>
          </ServiceContentItemText>
        </ServiceContentItem>
        <ServiceContentItem>
          <ServiceContentItemPic pic={servicePic_02}></ServiceContentItemPic>
        </ServiceContentItem>
      </ServiceContentBox>
    </ServiceContainer>
  );
};

export default Service;
