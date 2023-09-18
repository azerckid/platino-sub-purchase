import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100vw;
  height: 252px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  background-color: dodgerblue;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <h1>이제, 해외 배송으로 더 나은 일상을 만들어보세요</h1>
    </BannerContainer>
  );
};

export default Banner;
