import React from 'react';
import styled from "styled-components";

const ReadMoreBlock = () => {
    return (
        <Container>
            <Card>
                <h4>Outward clothes promise at gravity.</h4>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <button>Read More</button>
            </Card>
            <Card>
                <h4>Sufficient particular impossible.</h4>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <button>Read More</button>
            </Card>
        </Container>
    );
};

export default ReadMoreBlock;

const Container = styled.section`
  @media (max-width: 1199px) {
    height: auto;
    margin: 50px auto;
    flex-wrap: wrap;
  }
  max-width: 1190px;
  height: 354px;
  margin: 335px auto 102px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`

const Card = styled.div`
  @media (max-width: 1199px) {
    width: 100%;
    margin: 25px 0;
  }
  width: 580px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.09);
  text-align: center;
  h4 {
    @media (max-width: 1199px) {
      width: 100%;
    }
    width: 450px;
    margin: 40px auto 20px;
    font-weight: 800;
    font-size: 42px;
    line-height: 50px;
    letter-spacing: -0.03em;
  }
  p {
    width: 468px;
    margin: 0 auto 36px;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #64607D;
  }
  button {
    @media (max-width: 1199px) {
      margin-bottom: 35px;
    }
    width: 185px;
    height: 60px;
    background-color: #4F46BA;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-weight: 500;
    transition-duration: 0.2s;
    font-size: 16px;
    :hover {
      transform: scale(1.1);
    }
  }
`