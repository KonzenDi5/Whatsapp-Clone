import styled from 'styled-components'
import { Themes } from '../../styles/themes' 



export const WRapper = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: ${Themes.colorChat};
 display: flex;
 align-items: center;
 justify-content: center;
`
export const Container = styled.div`
width: 80vw;
height: 90%;
background-color: ${Themes.darkmode};
display: flex;
flex-direction: row;
color: white;
border-radius: 10px;
overflow: hidden;
`

export const ChatStyles=styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: end;
`


export const MobileAppNotice = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Themes.colorChat};
    color: white;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    flex-direction: column;
  }
`;

export const Down =styled.img`
margin-top: 40px;
width: 50px;
cursor: pointer;
`

export const Whatsapp = styled.img`
width: 200px;
margin-bottom:50px;
`

