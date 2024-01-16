import styled from "styled-components";
import {Themes} from "../../styles/themes"
import { Chat } from "../Chat";

export const SidebarStyles = styled.div`
width: 40%;
display: flex;
flex-direction: column;
`
export const HeaderSiderbar = styled.div`
width: 100%;
height: 8%;
background-color: ${Themes.backgroundChat} ;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
flex-direction: row;
`
export const ProfilePhoto = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
`
export const ChatHistory = styled.div`
font-size: 12px;
  background-color: ${props => props.isActive ? '#3E8671' : 'transparent'};
`

export const SearchInput = styled.div`
display: flex;
align-content: center;
justify-content: center;
margin-top:10px;
padding: 10px;
`
export const Input = styled.input`
border: none;
border-radius: 4px;
width: 90%;
background-color: ${Themes.colorChat};
color: ${Themes.clearmode};
padding: 5px;
font-size: 12px;

`
export const ConversasArquivadas = styled.div`
margin-top: 10px;
padding: 10px;
`

export const ArquiveStyles = styled.button`
display: flex;
justify-content: space-around;
background-color: transparent;
color: ${Themes.notification};
border: none;
width: 100%;
cursor: pointer;
`

export const ChatScroll =styled.div`
height: 100%;
overflow-y: auto;
`

export const MenuLateral = styled.div`
  position: absolute;
  width: 15%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${Themes.colorChat};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
