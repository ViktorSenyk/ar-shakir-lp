import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <Line/>
            <Wrap>
                <LeftSide>
                    <h5>AR SHAKIR</h5>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                </LeftSide>
                <Menu>
                    <h6>Company</h6>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Pricing</a>
                </Menu>
                <Menu>
                    <h6>Product</h6>
                    <a href="#">Invoicing Platform</a>
                    <a href="#">Accounting Platform</a>
                    <a href="#">Create Proposal</a>
                    <a href="#">Contracts</a>
                </Menu>
                <Menu>
                    <h6>Resources</h6>
                    <a href="#">Proposal Template</a>
                    <a href="#">Invoice Template</a>
                    <a href="#">Tutorial</a>
                    <a href="#">How to write a contract</a>
                </Menu>
            </Wrap>
            <Line/>
            <Rights>
                <a href="#">2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</a>
                <p>Supported by Microsoft Startup</p>
            </Rights>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 380px;
  background-color: #1B1C31;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.12);
  margin-bottom: 40px;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 10%;
`

const LeftSide = styled.div`
  @media (max-width: 1199px){
    display: none;
  }
  width: 520px;
  h5 {
    font-weight: 700;
    font-size: 20px;
    color: white;
    margin-bottom: 18px;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    color: white;
    opacity: 0.4;
  }
`

const Menu = styled.nav`
  @media (max-width: 1199px) {
    width: 100%;
    transform: scale(0.8);
  }
  width: 174px;
  height: 209px;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  h6 {
    font-weight: 700;
    font-size: 21px;
    color: white;
    margin-bottom: 23px;
    cursor: pointer;
    :hover{
      color: #FF7F5C;
    }
  }
  a {
    font-weight: 400;
    font-size: 15px;
    color: white;
    margin-top: 12px;
    :hover{
      color: #FF7F5C;
    }
  }
`

const Rights = styled.div`
  max-width: 1198px;
  height: 26px;
  margin: 0 auto 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  a {
    color: white;
    font-weight: 400;
    font-size: 12px;
    :hover{
      color: #FF7F5C;
    }
  }
  p {
    font-size: 12px;
    color: white;
    font-weight: 400;
  }
`