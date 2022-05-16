import React from 'react';
import styled from "styled-components";

const RecentBlogsBlock = () => {
    return (
        <Container>
            <h2>Recent Blogs</h2>
            <TopSide>
                <TextContent>
                    <h6>Best Practices</h6>
                    <p>In design active temper be uneasy. Thirty for remove plenty regard.</p>
                    <a href="#">Read More -></a>
                </TextContent>
                <Img/>
            </TopSide>
            <BottomSide>
                <Card>
                    <div>
                        <h6>Best Practices</h6>
                        <p>Partiality on or continuing particular principles as. </p>
                    </div>
                    <SmallImg style={{background: 'url("images/Blog2.png") no-repeat center'}}/>
                </Card>
                <Card>
                    <div>
                        <h6>Best Practices</h6>
                        <p>Village did removed enjoyed explain</p>
                    </div>
                    <SmallImg style={{background: 'url("images/Blog3.png") no-repeat center'}}/>
                </Card>
                <Card>
                    <div>
                        <h6>Best Practices</h6>
                        <p>Wise busy past both park when an ye no. Nay likely her length.</p>
                    </div>
                    <SmallImg style={{background: 'url("images/Blog4.png") no-repeat center'}}/>
                </Card>
            </BottomSide>
        </Container>
    );
};

export default RecentBlogsBlock;

const Container = styled.section`
  max-width: 1204px;
  margin: 0 auto 156px;
  padding: 0 10px;
  h2 {
    @media (max-width: 1199px) {
      text-align: center;
    }
    font-weight: 800;
    font-size: 50px;
    letter-spacing: -0.03em;
  }
`

const TopSide = styled.div`
  @media (max-width: 1199px) {
    width: 100%;
    height: auto;
    margin: 25px auto;
    flex-wrap: wrap;
  }
  width: 100%;
  height: 285px;
  background-color: white;
  margin: 72px 0 29px;
  display: flex;
  justify-content: space-between;
`

const TextContent = styled.div`
  @media (max-width: 1199px) {
    width: 100%;
    text-align: center;
    padding-bottom: 25px;
  }
  width: 524px;
  padding-left: 28px;
  h6 {
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin: 34px 0 10px;
  }
  p {
    font-weight: 700;
    font-size: 29px;
    letter-spacing: -0.02em;
    line-height: 36px;
    margin-bottom: 68px;
    cursor: pointer;
    transition-duration: 0.2s;
    :hover {
      color: #FF7F5C
    }
  }
  a {
    font-weight: 600;
    font-size: 16px;
    color: #1B1C31;
    transition-duration: 0.2s;
    :hover {
      font-size: 18px;
      color: #FF7F5C;
    }
  }
`

const Img = styled.div`
  @media (max-width: 1199px) {
    width: 100vw;
    height: 300px;
    margin: 0 auto;
    background-position: center;
  ;
  }
  width: 499px;
  height: 100%;
  background: url("images/Blog1.png") no-repeat;
`

const BottomSide = styled.div`
  @media (max-width: 1199px) {
    flex-wrap: wrap;
  }
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Card = styled.div`
  @media (max-width: 1199px) {
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  width: 382px;
  padding-top: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h6 {
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-left: 32px;
  }
  p {
    @media (max-width: 1199px) {
      width: 90%;
    }
    width: 310px;
    font-weight: 700;
    font-size: 29px;
    letter-spacing: -0.02em;
    line-height: 36px;
    margin: 7px 0 58px 32px;
    cursor: pointer;
    transition-duration: 0.2s;
    :hover {
      color: #FF7F5C
    }
  }
`

const SmallImg = styled.div`
  width: 100%;
  height: 202px;
`