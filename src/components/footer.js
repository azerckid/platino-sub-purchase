import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 1280px;
  margin-top: 100px;
  border-top: 1px solid #e5e5e5;
  color: #8e8e8e;
  div:nth-child(1) {
    margin-top: 8px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div:nth-child(1) {
      font-size: 30px;
      font-weight: 600;
    }
    div:nth-child(2) {
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    div:nth-child(1) {
    }
    div:nth-child(2) {
      margin-left: 10%;
    }
  }
  div:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    div:nth-child(1) {
    }
    div:nth-child(2) {
      margin-left: 10%;
    }
    div:nth-child(3) {
      margin-left: 10%;
    }
  }
  div:nth-child(4) {
    margin-top: 20px;
    margin-bottom: 50px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div>KHD 구매대행</div>
        <div>이용약관 | 개인정보처리방침</div>
      </div>
      <div>
        <div>대표 : 김동현 </div>
        <div>사업자번호 : 000-00-00000</div>
      </div>
      <div>
        <div>서울특별시 영등포구 63로 40 (라이프빌딩 912호)</div>
        <div>전화번호 : 000-0000-0000</div>
        <div>팩스 : 00-000-000-0000</div>
      </div>
      <div>CompanyName @ 202X. All rights reserved.</div>
    </FooterContainer>
  );
};

export default Footer;
