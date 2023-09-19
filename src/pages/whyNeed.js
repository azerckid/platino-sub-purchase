import React from "react";
import styled from "styled-components";

import pic_01 from "../assets/img/whyIllust_01.jpg";
import pic_02 from "../assets/img/whyIllust_02.jpg";
import pic_03 from "../assets/img/whyIllust_03.jpg";

const WhyNeedContainer = styled.div`
  width: 1280px;
  @media (max-width: 1024px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const WhyNeedQuestion = styled.div`
  height: 254px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    height: 60px;
  }
  h1 {
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 25px;
    }
  }
`;
const WhyNeedAnswer = styled.div``;
const WhyNeedAnswerSolution = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    width: 80%;
    height: 100px;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 18px;
      line-height: 1.3;
    }
  }
`;
const WhyNeedAnswerSolutionItemBox = styled.div`
  width: 100%;
  /* height: 672px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const WhyNeedAnswerSolutionItem = styled.div`
  width: 426px;
  height: 672px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
  }
`;
const WhyNeedAnswerSolutionItemPic = styled.div`
  width: 309px;
  height: 310px;
  margin-bottom: 60px;
  background-image: url(${(props) => props.pic});
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    width: 240px;
    height: 240px;
  }
`;
const WhyNeedAnswerSolutionItemTitle = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  @media (max-width: 1024px) {
    height: 50px;
    margin-bottom: 4px;
    font-size: 20px;
  }
`;
const WhyNeedAnswerSolutionItemContent = styled.div`
  width: 65%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 1.5;
  @media (max-width: 1024px) {
    width: 58%;
    font-size: 16px;
  }
`;

const WhyNeed = () => {
  return (
    <WhyNeedContainer>
      <WhyNeedQuestion>
        <h1>구매 대행, 왜 필요한가요?</h1>
      </WhyNeedQuestion>
      <WhyNeedAnswer>
        <WhyNeedAnswerSolution>
          <h1>
            KHD 구매 대행을 통해 해외에서 상품을 구매하는 경우 발생할 수 있는
            문제들을 함께 해결해보세요 !
          </h1>
        </WhyNeedAnswerSolution>
        <WhyNeedAnswerSolutionItemBox>
          <WhyNeedAnswerSolutionItem>
            <WhyNeedAnswerSolutionItemPic
              pic={pic_01}
            ></WhyNeedAnswerSolutionItemPic>
            <WhyNeedAnswerSolutionItemTitle>
              복잡한 사이트와 언어의 어려움
            </WhyNeedAnswerSolutionItemTitle>
            <WhyNeedAnswerSolutionItemContent>
              외국사이트에서 상품을 찾고 정보를 이해하기 어려워요
            </WhyNeedAnswerSolutionItemContent>
          </WhyNeedAnswerSolutionItem>
          <WhyNeedAnswerSolutionItem>
            <WhyNeedAnswerSolutionItemPic
              pic={pic_02}
            ></WhyNeedAnswerSolutionItemPic>
            <WhyNeedAnswerSolutionItemTitle>
              번거로운 상품 구매 절차
            </WhyNeedAnswerSolutionItemTitle>
            <WhyNeedAnswerSolutionItemContent>
              상품을 구매하기 위한 과정이 복잡하고 번거러워요
            </WhyNeedAnswerSolutionItemContent>
          </WhyNeedAnswerSolutionItem>
          <WhyNeedAnswerSolutionItem>
            <WhyNeedAnswerSolutionItemPic
              pic={pic_03}
            ></WhyNeedAnswerSolutionItemPic>
            <WhyNeedAnswerSolutionItemTitle>
              불안한 해외 배송
            </WhyNeedAnswerSolutionItemTitle>
            <WhyNeedAnswerSolutionItemContent>
              개인 구매 시 배송이 불안정하고 예상 도착일이 불확실한 경우가
              있어요
            </WhyNeedAnswerSolutionItemContent>
          </WhyNeedAnswerSolutionItem>
        </WhyNeedAnswerSolutionItemBox>
      </WhyNeedAnswer>
    </WhyNeedContainer>
  );
};

export default WhyNeed;
