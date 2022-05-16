import React from 'react';
import styled from "styled-components";

const YetPreferenceBlock = () => {
    return (
        <Container>
            <Wrap>
                <TopSide>
                    <h3>Yet preference connection unpleasant yet melancholy but end appearance</h3>
                    <button>Get Started Now</button>
                </TopSide>
                <BottomSide>
                    <List>
                        <Card>
                            <Number>1</Number>
                            <SmallWrap>
                                <h5>First Working Process</h5>
                                <p>Blessing it ladyship on sensible judgment settling outweigh.</p>
                            </SmallWrap>
                        </Card>
                        <Card>
                            <Number>2</Number>
                            <SmallWrap>
                                <h5>Dedicated Team</h5>
                                <p>Warmly little before cousin sussex entire men set.</p>
                            </SmallWrap>
                        </Card>
                        <Card>
                            <Number>3</Number>
                            <SmallWrap>
                                <h5>24/7 Hours Support</h5>
                                <p>And excellence partiality estimating terminated day everything.</p>
                            </SmallWrap>
                        </Card>
                    </List>
                    <Video><div/></Video>
                </BottomSide>
            </Wrap>
        </Container>
    );
};

export default YetPreferenceBlock;

const Container = styled.section`
  @media (max-width: 1199px) {
    padding: 50px 0 50px;
    height: auto;
  }
  width: 100%;
  height: 848px;
  padding: 144px 0 104px;
  background-color: #3734A9;
  margin: 0 auto;
`

const Wrap = styled.div`
  max-width: 1233px;
  margin: 0 auto;
  padding: 0 10px;
`

const TopSide = styled.div`
  @media (max-width: 1199px) {
    width: 90%;
    margin: 0 auto;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    @media (max-width: 1199px) {
      font-size: 20px;
      line-height: unset;
      width: 75%;
    }
    width: 823px;
    height: 100%;
    color: white;
    font-weight: 800;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: -0.03em;
  }
  button {
    @media (max-width: 1199px) {
      transform: scale(0.8);
    }
    width: 225px;
    height: 67px;
    color: white;
    background-color: #FF7F5C;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.02em;
    transition-duration: 0.2s;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`

const BottomSide = styled.div`
  margin-top: 39px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const List = styled.div`
  @media (min-width: 1210px) {
    width: 435px;
  }
  @media (max-width: 1199px) {
    margin: 0 auto 50px;
    height: 600px;
  }
  width: 425px;
  height: 393px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Video = styled.div`
  @media (max-width: 1199px) {
    transform: scale(0.8);
    margin: 50px auto 0;
  }
  @media (max-width: 685px) {
    transform: scale(0.7);
    height: 200px;
    background-size: contain;
    margin: 70px auto;

  }
  width: 734px;
  height: 461px;
  background: url("images/Group282.png") no-repeat center;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    position: relative;
    width: 94px;
    height: 94px;
    background-color: white;
    transition-duration: 0.2s;
    cursor: pointer;
    border-radius: 50%;
    ::before {
      content: '';
      width: 41px;
      height: 41px;
      position: absolute;
      left: 55%;
      top: 50%;
      transform: translate(-50%,-50%);
      background: url("images/Polygon3.svg") no-repeat center;
    }
    :hover {
      transform: scale(1.3);
    }
  }
`

const Card = styled.div`
  @media (max-width: 1199px) {
    //max-width: 400px;
    max-width: 80%;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
  }
  width: 100%;
  height: 106px;
  display: flex;
  justify-content: space-between;
`

const SmallWrap = styled.div`
  width: 312px;
  h5 {
    font-size: 26px;
    font-weight: 700;
    color: #E8F2FF;
    line-height: 32px;
    letter-spacing: -0.02em;
    margin-bottom: 5px;
  }
  p {
    font-weight: 500;
    font-size: 18.9px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #A0B3E9;
  }
`
const Number = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  background-color: rgba(27, 28, 49, 0.27);
  color: #E8F2FF;
  font-size: 46px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`