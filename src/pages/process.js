import React from "react";
import styled from "styled-components";

import { MdArrowForwardIos } from "react-icons/md";
import processPic_01 from "../assets/img/processPic_01.png";
import processPic_02 from "../assets/img/processPic_02.png";
import processPic_03 from "../assets/img/processPic_03.png";
import processPic_04 from "../assets/img/processPic_04.png";
import processPic_05 from "../assets/img/processPic_05.png";
import processPic_06 from "../assets/img/processPic_06.png";
import processPic_08 from "../assets/img/processPic_08.png";

const ProcessContainer = styled.div`
  width: 1280px;
`;
const ProcessTitle = styled.div`
  width: 100%;
  height: 254px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 35px;
    font-weight: 800;
    text-align: center;
  }
`;
const ProcessContentBox = styled.div`
  width: 1280px;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ProcessContentItem = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProcessContentItemPic = styled.div`
  width: 130px;
  height: 123px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  div {
    width: 95px;
    height: 95px;
    background-image: url(${(props) => props.pic});
    background-position: center;
    background-repeat: no-repeat;
  }

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #5e76ff;
`;
const ProcessContentItemText = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
`;
const ProcessArrowBox = styled.div`
  width: 30px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #5e76ff;
`;
const ProcessNoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #5e76ff;
  div:nth-child(1) {
  }
  div:nth-child(2) {
  }
`;

const Process = () => {
  return (
    <ProcessContainer>
      <ProcessTitle>
        <h1>구매절차</h1>
      </ProcessTitle>
      <ProcessContentBox>
        <ProcessContentItem>
          <ProcessContentItemPic pic={processPic_01}>
            <div></div>
          </ProcessContentItemPic>
          <ProcessContentItemText>1.주문확인</ProcessContentItemText>
        </ProcessContentItem>
        <ProcessArrowBox>
          <MdArrowForwardIos />
        </ProcessArrowBox>
        <ProcessContentItem>
          <ProcessContentItemPic pic={processPic_02}>
            <div></div>
          </ProcessContentItemPic>
          <ProcessContentItemText>2.현지발주</ProcessContentItemText>
        </ProcessContentItem>
        <ProcessArrowBox>
          <MdArrowForwardIos />
        </ProcessArrowBox>
        <ProcessContentItem>
          <ProcessContentItemPic pic={processPic_03}>
            <div></div>
          </ProcessContentItemPic>
          <ProcessContentItemText>3.현지배송</ProcessContentItemText>
        </ProcessContentItem>
        <ProcessArrowBox>
          <MdArrowForwardIos />
        </ProcessArrowBox>
        <ProcessContentItem>
          <ProcessContentItemPic pic={processPic_04}>
            <div></div>
          </ProcessContentItemPic>
          <ProcessContentItemText>4.현지물류센터접수</ProcessContentItemText>
        </ProcessContentItem>
      </ProcessContentBox>
      <ProcessContentBox>
        <ProcessContentItem>
          <ProcessContentItemPic pic={processPic_05}>
            <div></div>
          </ProcessContentItemPic>
          <ProcessContentItemText>5.항공배송</ProcessContentItemText>
        </ProcessContentItem>
        <ProcessArrowBox>
          <MdArrowForwardIos />
        </ProcessArrowBox>
        <ProcessContentItem>
          <ProcessContentItemPic pic={processPic_06}>
            <div></div>
          </ProcessContentItemPic>
          <ProcessContentItemText>6.국내통관</ProcessContentItemText>
        </ProcessContentItem>
        <ProcessArrowBox>
          <MdArrowForwardIos />
        </ProcessArrowBox>
        <ProcessContentItem>
          <ProcessContentItemPic pic={processPic_03}>
            <div></div>
          </ProcessContentItemPic>
          <ProcessContentItemText>7.국내배송</ProcessContentItemText>
        </ProcessContentItem>
        <ProcessArrowBox>
          <MdArrowForwardIos />
        </ProcessArrowBox>
        <ProcessContentItem>
          <ProcessContentItemPic pic={processPic_08}>
            <div></div>
          </ProcessContentItemPic>
          <ProcessContentItemText>8.배송완료</ProcessContentItemText>
        </ProcessContentItem>
      </ProcessContentBox>
      <ProcessNoticeBox>
        <div>
          평균 배송기간은 최소 5일 ~14일 정도 소요됩니다. (현지 상황에따라
          지연될 수 있음)
        </div>
        <div>이미 출고된 상품의 취소는 불가합니다.</div>
      </ProcessNoticeBox>
    </ProcessContainer>
  );
};

export default Process;
