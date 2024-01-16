import React, { useContext, useState } from "react";
import { ChatContext } from '../ChatContext';
import { SidebarStyles, HeaderSiderbar, ProfilePhoto, SearchInput, Input, ConversasArquivadas, ArquiveStyles, ChatScroll, MenuLateral } from "./styles";
import { Group, AccessTime, Chat, Add, MoreVert, Search, FilterList, Archive } from '@material-ui/icons';
import profile1 from '../../assets/profile1.png';
import { ChatHistory } from "../ChatHistory";

export function Sidebar() {
  const { chats, changeChat, currentChat } = useContext(ChatContext);
  const [lastChatId, setLastChatId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChatChange = (chatId) => {
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      changeChat(chatId);
      setLastChatId(chatId);
      console.log(`Clicou no chat com ID ${chatId}`);
    }
  }

  const handleProfileClick = () => {
    console.log("Clicou no perfil");
  }

  const handleArchiveClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <SidebarStyles>
        <HeaderSiderbar>
          <ProfilePhoto src={profile1} alt="ProfilePic" style={{ cursor: 'pointer' }} onClick={handleProfileClick} />
          <Group style={{ cursor: 'pointer' }}  />
          <AccessTime style={{ cursor: 'pointer' }} />
          <Chat style={{ cursor: 'pointer' }}  />
          <Add style={{ cursor: 'pointer' }} />
          <MoreVert style={{ cursor: 'pointer' }} />
        </HeaderSiderbar>
        <SearchInput>
          <Search style={{ color: '#3E8671', cursor: "pointer" }} />
          <Input placeholder="Pesquisar ou começar uma nova conversa" />
          <FilterList style={{ color: '#3E8671', cursor: "pointer" }} />
        </SearchInput>
        <ConversasArquivadas>
          <ArquiveStyles onClick={handleArchiveClick}><Archive />Arquivadas<p>0</p></ArquiveStyles>
        </ConversasArquivadas>
        {isMenuOpen && (
          <MenuLateral>
            <p>Não há conversas arquivadas</p>
          </MenuLateral>
        )}
        <ChatScroll>
          {chats.map(chat => (
           <ChatHistory
           key={chat.id}
           onClick={() => handleChatChange(chat.id)}
           image={chat.image}
           name={chat.name}
           message={chat.lastMessage}
           time={chat.time}
           isActive={currentChat ? currentChat.id === chat.id : false}
         />
          ))}
        </ChatScroll>
      </SidebarStyles>
    </>
  );
}