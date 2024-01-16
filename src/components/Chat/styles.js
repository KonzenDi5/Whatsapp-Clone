import styled from "styled-components";
import {Themes} from "../../styles/themes"
import background from "../../assets/wallpaper.png"

export const Container = styled.div`
height: 100%;
width: 93%;
background-image: url(${background});
  background-repeat: repeat;
  background-size: contain;
`

export const ProfilePhoto = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`
export const HeaderChat = styled.div`
width: 100%;
height: 8%;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
box-shadow: -5px 6px 21px -8px rgba(0,0,0,0.44);
background-color: ${Themes.backgroundChat};
`

export const Name = styled.h3`

font-size: 12px;
`
export const Status = styled.p`
font-size: 9px;
`
export const NameStatus = styled.div`
margin-left: 20px;
`

export const Messages = styled.div`
height: 100%;
overflow-y: auto;
`

export const ChatMessage = styled.div`
    display: flex;
    justify-content: ${props => props.direction === 'left' ? 'flex-start' : 'flex-end'};
    margin: 10px;
    .message {
        background: ${props => props.direction === 'left' ? '#F0F0F0' : '#143C31'};
        color: ${props => props.direction === 'left' ? '#1C1C1C' : '#F2F2F2'};
        padding: 10px 15px;
        border-radius: 20px;
        max-width: 60%;
        display: inline-block;
        text-align: left;
        position: relative;
        font-size: 12px;
        .timeAndIcon {
            display: flex;
            justify-content: ${props => props.direction === 'left' ? 'flex-start' : 'flex-end'};
            align-items: center;
            .receivedIcon {
                width: 20px;
                margin-right: 5px;
            }
            .time {
                font-size: 8px;
            }
        }
    }
`;

export const IconsFunction = styled.div`
position: fixed;
right: 10%;
`

export const SideMenu = styled.div`
  position: absolute;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-35%'};
  width: 25%;
  height: 80%;
  background-color: ${Themes.darkmode};
  transition: right 0.3s ease;
  z-index: 1;
`;

export const ProfilePhotoMenu = styled.img`
width: 250px;
height: 250px;
border-radius: 50%;
padding: 90px;
`

export const Medias = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
border-top: solid 1px #1F2E38;
padding: 20px;
`

export const MediaContent = styled.img`
padding: 10px;
width: 100px;
border: solid 1px #28362C;
margin: 2px;
`
export const LayersMenu = styled.div`
background-color: ${Themes.colorChat};
margin-bottom:20px;
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const LayersMenuOptions = styled.div`
display: flex;
flex-direction: row;
`

export const KonzenSigned=styled.img`
width: 200px;
margin-left: 30%;
`
export const Message=styled.div``



