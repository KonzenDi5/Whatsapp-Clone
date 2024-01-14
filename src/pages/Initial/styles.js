import styled from "styled-components";
import { Themes } from "../../styles/themes";
import family from '../../assets/family.png'

export const Button = styled.button`
  background-color: ${props => props.primary ? "#29EF58" : "transparent"};
  color: ${props => props.primary ? "white" : "black"};
  padding: 10px;
  border-radius: ${props => props.primary ? "20px" : "0"};
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;

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

export const LayerButtons = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;    
justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Themes.white};
`;

export const Header = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WhatsIcon = styled.img`
  width: 150px;
`;

export const Content = styled.div`
width: 100%;
`

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.open ? '0' : '-100%'}; //esconder totalmente caso o botão haburger esteja fechado 
  width: 200px;
  height: 100%;
  background-color: white;
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

export const Layer1 = styled.div`
  background-image: url(${family});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  color: white;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const ContentMessageLayer1 = styled.img`
display: flex;
flex-direction: column;
padding: 50px;
`

export const ContentMessages = styled.div`
display: flex;
flex-direction: column;
`

export const Layer1ImageMessage = styled.img`
width: 500px;
`

export const Layer2 = styled.div`
background-color: ${Themes.clearmode};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 30px;
`
export const MessageLayer2 = styled.img`
width: 1000px;
`

export const Text = styled.div`
display: flex;
flex-direction: column;
width: 15%;
font-size:  20px;
height: 80%;
margin-right: 100px;
`
export const Title = styled.h1`
padding: 20px;
`

export const Subtitle = styled.h3`
padding: 20px;
`
export const TitleL2 = styled.h2`
width: 60%;
color: black;
padding: 30px;
`
