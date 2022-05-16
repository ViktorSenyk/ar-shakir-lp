import React from 'react';
import styled from "styled-components";
import {useState} from "react";


const Header = () => {

    let [menuBoolean1, setMenuBoolean1] = useState(false);
    let [menuBoolean2, setMenuBoolean2] = useState(false);
    let [burgerBoolean, setBurgerBoolean] = useState(false);

    return (
        <Container>
            <h2>AR SHAKIR</h2>
            <NavGroup>
                <a href="#" onMouseEnter={() => setMenuBoolean1(menuBoolean1 = !menuBoolean1)} onMouseLeave={() => setMenuBoolean1(menuBoolean1 = !menuBoolean1)}>Product
                    <OpenMenu1 style={{height: menuBoolean1 ? '170px' : '0px'}}>
                        <a href="#">item -></a>
                        <a href="#">item -></a>
                        <a href="#">item -></a>
                        <a href="#">item -></a>
                        <a href="#">item -></a>
                    </OpenMenu1>
                </a>
                <a href="#" onMouseEnter={() => setMenuBoolean2(menuBoolean2 = !menuBoolean2)} onMouseLeave={() => setMenuBoolean2(menuBoolean2 = !menuBoolean2)}>Template
                    <OpenMenu2 style={{height: menuBoolean2 ? '170px' : '0px'}}>
                        <a href="#">item -></a>
                        <a href="#">item -></a>
                        <a href="#">item -></a>
                        <a href="#">item -></a>
                        <a href="#">item -></a>
                    </OpenMenu2>
                </a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
            </NavGroup>
            <ButtonGroup>
                <a href="#">Sign In</a>
                <button>Start Free</button>
            </ButtonGroup>
            <Burger onClick={()=> setBurgerBoolean(burgerBoolean = true)} onMouseLeave={()=> setBurgerBoolean(burgerBoolean = false)}>
                <MobileMenu style={{right: burgerBoolean ? '0' : '-40vw'}}>
                    <NavGroup style={{display: 'flex', flexDirection: 'column', minHeight: '30vh', justifyContent: 'space-around'}}>
                        <a style={{transform: 'scale(1.5)'}} href="#" onMouseEnter={() => setMenuBoolean1(menuBoolean1 = !menuBoolean1)} onMouseLeave={() => setMenuBoolean1(menuBoolean1 = !menuBoolean1)}>Product
                            <OpenMenu1 style={{height: menuBoolean1 ? '170px' : '0px'}}>
                                <a href="#">item -></a>
                                <a href="#">item -></a>
                                <a href="#">item -></a>
                                <a href="#">item -></a>
                                <a href="#">item -></a>
                            </OpenMenu1>
                        </a>
                        <a style={{transform: 'scale(1.5)'}} href="#" onMouseEnter={() => setMenuBoolean2(menuBoolean2 = !menuBoolean2)} onMouseLeave={() => setMenuBoolean2(menuBoolean2 = !menuBoolean2)}>Template
                            <OpenMenu2 style={{height: menuBoolean2 ? '170px' : '0px'}}>
                                <a href="#">item -></a>
                                <a href="#">item -></a>
                                <a href="#">item -></a>
                                <a href="#">item -></a>
                                <a href="#">item -></a>
                            </OpenMenu2>
                        </a>
                        <a style={{transform: 'scale(1.5)'}} href="#">Blog</a>
                        <a style={{transform: 'scale(1.5)'}} href="#">Pricing</a>
                    </NavGroup>
                    <ButtonGroup style={{display: 'flex'}}>
                        <a href="#">Sign In</a>
                        <button>Start Free</button>
                    </ButtonGroup>
                </MobileMenu>
            </Burger>
        </Container>
    );
};

export default Header;

const Container = styled.header`
  @media (max-width: 1199px) {
    width: 100vw;
  }
  max-width: 1187px;
  height: 52px;
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  z-index: 100;
  * {
    color: white;
  }
  h2 {
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    :hover{
      color: #FF7F5C;
    }
  }
  a {
    font-weight: 500;
    font-size: 14px;
    position: relative;
  }
`

const NavGroup = styled.nav`
  @media (max-width: 1199px) {
    display: none;
  }
  width: 322px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: inline-block;
    height: 25px;
    text-align: center;
    position: relative;
    transition-duration: 0.5s;
    :hover {
      color: #FF7F5C;
    }
  }
  a:nth-child(1)::after, 
  a:nth-child(2)::after {
    content: '';
    width: 8px;
    height: 7px;
    position: absolute;
    top: 7px;
    right: -15px;
    background: url("/images/Vector.svg") no-repeat center;
  }
`

const ButtonGroup = styled.div`
  @media (max-width: 499px) {
    display: none;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  width: 231px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    @media (max-width: 499px) {
      margin: 20px 0;
    }
    width: 137px;
    height: 52px;
    border: none;
    border-radius: 10px;
    background-color: #FF7F5C;
    cursor: pointer;
    font-weight: 500;
    transition-duration: 0.1s;
    font-size: 14px;

    :hover {
      transform: scale(1.1);
    }
  }

  a {
    @media (max-width: 1200px) {
      width: 137px;
      height: 52px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      display: flex;
      border: 2px solid #FF7F5C;
      font-size: 18px;
    }
    display: block;
    transition-duration: 0.1s;

    :hover {
      transform: scale(1.3);
      color: #FF7F5C;
    }
  }
`

const OpenMenu1 = styled.div`
  display: flex;
  overflow: hidden;
  height: 0;
  transition-duration: 0.5s;
  position: absolute;
  top: 23px;
  left: -13px;
  width: 90px;
  background-color: rgba(255, 255, 255, 0.91);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  //padding: 5px;
  border-radius: 5px;

  a {
    color: black;
    font-weight: 600;
    font-size: 15px;
    transition-duration: 0.1s;
    :hover {
      color: #FF7F5C;
      transform: scale(1.4);
    }

    ::after {
      display: none;
    }
  }
`

const OpenMenu2 = styled(OpenMenu1)`
  left: -8px;
`

const Burger = styled.div`
  @media (max-width: 1199px) {
    display: block;
  }
  display: none;
  width: 40px;
  height: 40px;
  background: url("/images/Burger.svg") no-repeat center;
  background-size: contain;
  cursor: pointer;
  margin-right: 15px;
`

const MobileMenu = styled.nav`
  display: flex;
  transition-duration: 0.5s;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 50px;
  right: -40vw;
  width: 40vw;
  background: rgba(22, 28, 47, 0.83);
  z-index: 1000;
  padding: 10px 0;
`

