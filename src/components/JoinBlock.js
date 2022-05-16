import React from 'react';
import styled from "styled-components";

const JoinBlock = () => {
    return (
        <Container>
            <h2>Join millions of<br/>creative people with AR Shakir</h2>
            <button>Join The Waitlist -></button>
        </Container>
    );
};

export default JoinBlock;

const Container = styled.section`
  width: 100%;
  height: 375px;
  background-color: #1B1C31;
  padding: 72px 0 90px;
  text-align: center;
  h2 {
    @media (max-width: 1199px) {
      font-size: 40px;
    }
    font-weight: 500;
    font-size: 53px;
    line-height: 70px;
    color: white;
    letter-spacing: -0.02em;
    margin: 0 auto 25px;
  }
  button {
    width: 186px;
    height: 48px;
    color: #121313;
    background-color: #F9896B;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition-duration: 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }
`