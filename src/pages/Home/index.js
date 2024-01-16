import React from 'react';
import { WRapper, Container, ChatStyles, MobileAppNotice, Down, Whatsapp } from "./styles"
import { Chat } from "../../components/Chat"
import { Message } from "../../components/Message"
import { Sidebar } from "../../components/Sidebar"
import { ChatProvider } from "../../components/ChatContext"
import { Link } from 'react-router-dom';
import donwload from '../../assets/download.png'
import whats from '../../assets/whatlogo.png'


export const Home = () => {
  return (
    <>
      <ChatProvider>
        <WRapper>
          <Container>
            <Sidebar />
            <ChatStyles>
              <Chat />
              <Message />
            </ChatStyles>
          </Container>
        </WRapper>
        <MobileAppNotice>
          <Whatsapp src={whats} alt='whatslogo' />
          Para dispositivos móveis, disponibilizamos o aplicativo.
          <Link to ='https://www.whatsapp.com/download?lang=pt_BR'><Down src={donwload} alt='download' /></Link>
        </MobileAppNotice>
      </ChatProvider>
    </>
  );
};
