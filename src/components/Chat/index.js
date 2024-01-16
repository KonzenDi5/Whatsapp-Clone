import React, { useState, useContext } from "react";  // Importa o React e hooks do React
import { ChatContext } from '../../components/ChatContext';  // Importa o contexto de chat
import {
  HeaderChat,
  Container,
  ProfilePhoto,
  Name,
  Status,
  NameStatus,
  Messages,
  ChatMessage,
  IconsFunction,
  SideMenu,
  ProfilePhotoMenu,
  Medias,
  MediaContent,
  LayersMenu,
  LayersMenuOptions,
  KonzenSigned,
} from "./styles";  // Importa componentes e estilos necessários
import CheckIcon from "@material-ui/icons/Check";  // Importa o ícone de marcação de check
import IconButton from "@material-ui/core/IconButton";  // Importa o botão do Material-UI
import Menu from "@material-ui/core/Menu";  // Importa o componente de menu do Material-UI
import MenuItem from "@material-ui/core/MenuItem";  // Importa o componente de item de menu do Material-UI
import MoreVertIcon from "@material-ui/icons/MoreVert";  // Importa o ícone de mais opções
import SearchIcon from "@material-ui/icons/Search";  // Importa o ícone de busca
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";  // Importa o ícone de câmera
import InputBase from "@material-ui/core/InputBase";  // Importa o componente de entrada de texto do Material-UI
import BlockIcon from '@material-ui/icons/Block';  // Importa o ícone de bloqueio
import SettingsIcon from '@material-ui/icons/Settings';  // Importa o ícone de configurações
import LocationOnIcon from '@material-ui/icons/LocationOn';  // Importa o ícone de localização
import KonzenDev from "../../assets/LOGOWHITE.png";  // Importa a imagem do logo

// Opções do menu de mais opções
const options = ["Dados do contato", "Limpar conversa", "Bloquear o contato", "Apagar conversa"];

export function Chat() {
  // Estados locais
  const [anchorEl, setAnchorEl] = React.useState(null);  // Estado para o elemento ancorado (para o menu)
  const [searchOpen, setSearchOpen] = useState(false);  // Estado para controlar a abertura da barra de pesquisa
  const [menuOpen, setMenuOpen] = useState(false);  // Estado para controlar a abertura do menu lateral
  const { chats, currentChat, changeChat } = useContext(ChatContext);  // Extrai valores do contexto de chat
  const open = Boolean(anchorEl);  // Converte o estado do anchorEl para um valor booleano

  // Função para lidar com o clique no botão de mais opções
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Função para fechar o menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Função para alternar a visibilidade do menu lateral
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para alterar o chat atual
  const handleChatChange = (chatId) => {
    changeChat(chatId);
  };

  // Obtém a conversa atual ou a primeira conversa da lista
  const conversation = currentChat || chats[0];

  return (
    <>
      {/* Container principal */}
      <Container>
        {/* Cabeçalho do chat */}
        <HeaderChat>
          {/* Foto do perfil */}
          <ProfilePhoto src={conversation.image} alt="ProfilePic" style={{ color: '#3E8671', cursor: "pointer" }}/>
          {/* Nome e status */}
          <NameStatus>
            <Name style={{ cursor: "pointer" }} onClick={toggleMenu}>{conversation.name}</Name>
            <Status>{conversation.lastSeen}</Status>
          </NameStatus>

          {/* Ícones e funcionalidades */}
          <IconsFunction>
            {/* Ícone de câmera para chamada de vídeo */}
            <IconButton color="inherit">
              <PhotoCameraIcon onClick={() => { navigator.mediaDevices.getUserMedia({ video: true }) }} />
            </IconButton>
            {/* Ícone de busca */}
            <IconButton color="inherit" onClick={() => setSearchOpen(!searchOpen)}>
              <SearchIcon />
            </IconButton>
            {/* Barra de pesquisa */}
            {searchOpen && <InputBase placeholder="Pesquisar…" inputProps={{ 'aria-label': 'search' }} />}
            {/* Ícone de mais opções */}
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon style={{ color: '#DBE2E0', cursor: "pointer" }} />
            </IconButton>
            {/* Menu de mais opções */}
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </IconsFunction>
        </HeaderChat>

        {/* Menu lateral */}
        <SideMenu isOpen={menuOpen}>
          {/* Camadas do menu lateral */}
          <LayersMenu>
            {/* Foto e informações do perfil no menu lateral */}
            <ProfilePhotoMenu src={conversation.image} />
            <Name>{conversation.name}</Name>
            <Status>{conversation.lastSeen}</Status>
          </LayersMenu>

          {/* Camadas do menu lateral */}
          <LayersMenu
          >
          {/* Título "Mídias" no menu lateral */}
          <Name>Mídias</Name>
          {/* Conteúdo das mídias no menu lateral */}
          <Medias>
            <MediaContent src="https://img.freepik.com/psd-gratuitas/modelo-a4-feliz-dia-dos-pais-039_318354-1310.jpg?w=740&t=st=1705285505~exp=1705286105~hmac=f968d1b61aa5ba2a4399eeeda838e4d4120698804079333fe1c96f8ad1af40c0" alt='mediacode=1334234534246' />
            <MediaContent src="https://img.freepik.com/psd-gratuitas/desenho-de-modelo-de-festa-de-musica-house_23-2151059300.jpg?w=1060&t=st=1705285517~exp=1705286117~hmac=cbfed08936c4d43984542e22f00b00731c999db7ece823a71e8643e7c7dd895c" alt='mediacode=1334234534246' />
            <MediaContent src="https://img.freepik.com/psd-gratuitas/modelo-de-folheto-vertical-de-dia-dos-namorados_23-2149396907.jpg?w=740&t=st=1705285531~exp=1705286131~hmac=dcfba78056475353d0bd5d391b0f45452c548d8a60af6db9c8c5b77cf9efc574" alt='mediacode=1334234534246' />
            <MediaContent src="https://img.freepik.com/psd-gratuitas/modelo-texturizado-de-midia-social-para-campanhas-de-festa-junina-e-arraial_314999-1835.jpg?w=740&t=st=1705285549~exp=1705286149~hmac=d70bb0f627fa930598d374e8a309bb8e1b3ebe55fb5169a23cc722d6fc0d9a4b" alt='mediacode=1334234534246' />
          </Medias>
        </LayersMenu>

        {/* Camadas do menu lateral */}
        <LayersMenu>
          {/* Opções no menu lateral (Bloquear, Configurações, Localização) */}
          <LayersMenuOptions>
            <BlockIcon style={{ color: 'red' }} /> <span style={{ color: 'red' }} onClick={() => handleChatChange(conversation.id)}>Bloquear</span>
            <SettingsIcon /> <span>Configurações</span>
            <LocationOnIcon /> <span>Localização</span>
          </LayersMenuOptions>
        </LayersMenu>

        {/* Logotipo no menu lateral */}
        <KonzenSigned src={KonzenDev} />
      </SideMenu>

      {/* Área de mensagens */}
      <Messages>
        {/* Mapeia as mensagens da conversa atual e exibe os balões de chat */}
        {conversation.messages && conversation.messages.map((message, index) => (
          <ChatMessage direction={index % 2 === 0 ? "right" : "left"} key={index}>
            <div className="message">
              <p>{message.text}</p>
              {/* Ícone de check e timestamp da mensagem */}
              <div className="timeAndIcon">
                <CheckIcon className="receivedIcon" />
                <span className="time">{message.time}</span>
              </div>
            </div>
          </ChatMessage>
        ))}
      </Messages>
    </Container>
  </>
);
}
