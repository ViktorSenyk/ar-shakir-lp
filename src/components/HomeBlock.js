import React from 'react';
import styled from "styled-components";

const HomeBlock = () => {
    return (
        <Wrap>
            <Container>
                <h2>Managing your crypto portfolio has never been easier</h2>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <ButtonGroup>
                    <GetStartedBtn>Get Started</GetStartedBtn>
                    <a href="#">
                        <PlayBtn/><span>See How It Works</span>
                    </a>
                </ButtonGroup>
            </Container>
        </Wrap>
    );
};

export default HomeBlock;

const Wrap = styled.section`
  @media (max-width: 1199px) {
    margin-bottom: 170px;
  }
  width: 100vw;
  height: 790px;
  margin: 0 auto 421px;
  background: url("/images/SectionHeader.png") no-repeat;
  background-size: cover;
  padding-top: 149px;
`

const Container = styled.div`
  @media (max-width: 1199px) {
    max-width: 70%;
  }
  width: 870px;
  margin: 0 auto;
  text-align: center;
  * {
    color: white;
  }
  h2 {
    @media (max-width: 1199px) {
      font-size: 40px;
      line-height: unset;
    }
    @media (max-width: 500px) {
      font-size: 30px;
    }
    font-weight: 800;
    font-size: 60px;
    letter-spacing: -0.03em;
    line-height: 80px;
  }
  p {
    @media (max-width: 1199px) {
      font-size: 17px;
      line-height: unset;
      padding: 0 10px;
      margin-bottom: 20px;
    }
    margin: 32px 0 56px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.02em;
  }
`

const ButtonGroup = styled.div`
  @media (max-width: 1199px) {
    padding: 0 10px;
    max-width: 70%;
    min-width: 285px;
    align-items: center;
    justify-content: center;
  }
  width: 415px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 17px;
    span{
      @media (max-width: 1199px) {
        font-size: 13px;
      }
      //@media (max-width: 500px) {
      //  width: 90px;
      //}
    }
  }
`

const GetStartedBtn = styled.button`
  @media (max-width: 1199px) {
    transform: scale(0.8);
  }
  width: 162px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background-color: #FF7F5C;
  font-weight: 500;
  font-size: 16px;
  transition-duration: 0.1s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`

const PlayBtn = styled.button`
  @media (max-width: 1199px) {
    transform: scale(0.8);
  }
  position: relative;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  transition-duration: 0.1s;
  background: #22D497 url("images/PlayIcon.svg") no-repeat center left 23px;
  cursor: pointer;
  margin-right: 11px;
  :hover {
    transform: scale(1.1);
  }
`