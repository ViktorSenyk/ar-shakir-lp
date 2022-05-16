import React from 'react';
import styled from "styled-components";

const OurFeatureBlock = () => {
    return (
        <Wrap>
            <Container>
                <Banner><BannerSm/></Banner>
                <TextSide>
                    <h5>Our Feature</h5>
                    <h2>All of your portfolios are
                        linked to your AR Shakir
                        account</h2>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <GetStartedBtn>Get Started</GetStartedBtn>
                </TextSide>
            </Container>
            <Container style={{flexDirection: 'row-reverse'}}>
                <Banner style={{background: 'url("images/Group4351.png") no-repeat right top', backgroundSize: 'contain', marginBottom: '-70px'}}/>
                <TextSide>
                    <h5>Our Feature</h5>
                    <h2>All payments can be
                        managed from one
                        account</h2>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <GetStartedBtn>Get Started</GetStartedBtn>
                </TextSide>
            </Container>
        </Wrap>

);
};

export default OurFeatureBlock;

const Wrap = styled.div`
  
`

const Container = styled.section`
  @media (max-width: 1199px) {
    width: 100%;
  }
  max-width: 1214px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 77px;
  flex-direction: row;
  padding: 0 10px;
  
`

const Banner = styled.div`
  @media (max-width: 1199px) {
    width: 100%;
    margin-bottom: 40px;
  }
  width: 568px;
  height: 569px;
  background: url("images/Illustration.png") no-repeat center top;
  display: flex;
  flex-direction: column-reverse;
  overflow: visible;
`

const BannerSm = styled.div`
  @media (max-width: 1199px) {
    background-size: 110%;
  }
  width: 110%;
  height: 250px;
  background: url("images/IllustrationSm.svg") no-repeat center top;
  background-size: 130%;
`

const TextSide = styled.div`
  @media (max-width: 1199px) {
    width: 100%;
    text-align: center;
  }
  width: 579px;
  h5 {
    font-size: 18px;
    color: #3734A9;
    text-transform: uppercase;
    font-weight: 800;
  }
  h2 {
    margin: 25px 0 26px;
    font-weight: 700;
    font-size: 50px;
    line-height: 56px;
    letter-spacing: -0.03em;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #757095;
  }
`

const GetStartedBtn = styled.button`
  width: 162px;
  height: 60px;
  font-weight: 500;
  font-size: 16px;
  color: white;
  background-color: #3734A9;
  border: none;
  border-radius: 8px;
  margin-top: 27px;
  transition-duration: 0.1s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`