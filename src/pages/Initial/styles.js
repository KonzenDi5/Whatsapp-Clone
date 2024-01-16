import styled from "styled-components";
import { Themes } from "../../styles/themes";
import family from '../../assets/family.png';

export const Button = styled.button`
  background-color: ${props => props.primary ? "#29EF58" : "transparent"};
  color: ${props => props.primary ? "white" : "black"};
  padding: 10px;
  border-radius: ${props => props.primary ? "20px" : "0"};
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin: 20px;

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
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Themes.white};
`;

export const Header = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const WhatsIcon = styled.img`
  width: 150px;
`;

export const Content = styled.div`
  width: 100%;
`;

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
  padding: 50px;
  box-sizing: border-box;
`;

export const Layer1 = styled.div`
  background:url(${family});  
  background-size: cover;
  display: flex;
  flex-direction: row;
  color: white;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 30px;
  border-radius: 50px;

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 20px;
    background-position:center;
    background-size: cover;
  }
`;

export const ContentMessageLayer1 = styled.img`
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (max-width: 768px) {
    display: none;

  }
`;

export const ContentMessages = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Layer1ImageMessage = styled.img`
  width: 500px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Layer2 = styled.div`
  width: 100%;
  background-color: ${Themes.clearmode};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;

  @media (max-width: 768px) {
    background-color: ${Themes.clearmode};
  }
`;

export const MessageLayer2 = styled.img`
  width: 900px;

  @media (max-width: 768px) {
    width: 600px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  height: 80%;
  margin-left: 0;

  @media (min-width: 768px) {
    width: 30%;
    margin-left: 200px;
  }
`;

export const Title = styled.h1`
  padding: 20px;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 40px;
    width: 30%;
  }
`;

export const Subtitle = styled.h3`
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleL2 = styled.h2`
  width: 60%;
  color: ${Themes.lightgreen};
  padding: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
    width: 80%;
  }
`;

export const VideoMessage = styled.img`
  width: 200px;
  @media (max-width: 768px) {
    display: none;
  }
`;


