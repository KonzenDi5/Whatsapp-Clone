import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const WRapper = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: ${Themes.darkmode};
 display: flex;
 align-items: center;
 justify-content: center;
`
export const Container = styled.div`
width: 30vw;
height: 30vw;
background-color: ${Themes.colorChat};
box-shadow: 13px 13px 80px -16px rgba(0,0,0,0.75);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 50px;
`



export const Logo = styled.img`
width: 250px;
`

export const Button = styled.button`
  background-color: ${props => props.primary ? "#29EF58" : "transparent"};
  color: ${props => props.primary ? "white" : "black"};
  padding: 10px;
  border-radius: ${props => props.primary ? "20px" : "0"};
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: ${props => props.primary ? "0" : "2px"};
    background-color: green;
    transition: width 0.3s;
  }

  &:hover::after {
    width: ${props => props.primary ? "0" : "100%"};
  }
`;
export const Input = styled.input`
border-radius: 50px;
margin: 30px;
height: 35px;
width: 400px;
background-color: ${Themes.darkmode};
color: ${Themes.clearmode};
padding: 10px;
border: 1px solid ${Themes.greeMasc};
@media (max-width: 768px) {
    width: 200px;
  }
`

export const Title = styled.h1`
padding: 20px;
font-size: 20px;
color: #21C465;
`


export const Subtitle = styled.h3`
padding: 20px;
`
