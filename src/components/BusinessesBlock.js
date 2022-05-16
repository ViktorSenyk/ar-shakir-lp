import React from 'react';
import styled from "styled-components";

const BusinessesBlock = () => {
    return (
        <Container>
            <Banner/>
            <h3>Over 32k+ software  businesses growing with AR Shakir.</h3>
            <Wrap>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
            </Wrap>
        </Container>
    );
};

export default BusinessesBlock;

const Container = styled.section`
  position: relative;
  max-width: 1257px;
  text-align: center;
  margin: 0 auto 51px;
  h3 {
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 36px;
  }
`

const Banner = styled.div`
  @media (max-width: 1199px) {
    width: 80%;
    top: -475px;
  }
  @media (max-width: 500px) {
    top: -530px;
  }
  width: 804px;
  height: 526px;
  position: absolute;
  top: -600px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: url("images/Group4345.svg") no-repeat center;
  background-size: contain;
`

const Wrap = styled.div`
  @media (max-width: 1199px) {
    height: 60px;
  }
  max-width: 1258px;
  height: 32px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  a {
    @media (max-width: 1199px) {
      transform: scale(0.7);
      background-size: contain;
    }
    display: block;
    width: 137px;
    height: 100%;
    transition-duration: 0.2s;
    :hover {
      transform: scale(1.2);
    }
    :nth-child(1) {
      background: url("images/OpenZeppelin.svg") no-repeat center;
    }
    :nth-child(2) {
      background: url("images/Oracle.svg") no-repeat center;
    }
    :nth-child(3) {
      background: url("images/Morpheus.svg") no-repeat center;
    }
    :nth-child(4) {
      background: url("images/Samsung.svg") no-repeat center;
    }
    :nth-child(5) {
      background: url("images/Monday.svg") no-repeat center;
    }
    :nth-child(6) {
      background: url("images/Segment.svg") no-repeat center;
    }
    :nth-child(7) {
      background: url("images/Protonet.svg") no-repeat center;
    }
  }
`