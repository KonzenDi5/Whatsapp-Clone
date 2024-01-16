import React, { useState, useContext } from "react";
import { ChatContext } from '../../components/ChatContext';
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
} from "./styles";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import InputBase from "@material-ui/core/InputBase";
import BlockIcon from '@material-ui/icons/Block';
import SettingsIcon from '@material-ui/icons/Settings';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KonzenDev from "../../assets/LOGOWHITE.png";

const options = ["Dados do contato", "Limpar conversa", "Bloquear o contato", "Apagar conversa"];

export function Chat() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { chats, currentChat, changeChat } = useContext(ChatContext);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChatChange = (chatId) => {
    changeChat(chatId);
  };

  const conversation = currentChat || chats[0];

  return (
    <>
      <Container>
        <HeaderChat>
          <ProfilePhoto src={conversation.image} alt="ProfilePic" style={{ color: '#3E8671', cursor: "pointer" }}/>
          <NameStatus>
            <Name style={{ cursor: "pointer" }} onClick={toggleMenu}>{conversation.name}</Name>
            <Status>{conversation.lastSeen}</Status>
          </NameStatus>

          <IconsFunction>
            <IconButton color="inherit">
              <PhotoCameraIcon onClick={() => { navigator.mediaDevices.getUserMedia({ video: true }) }} />
            </IconButton>
            <IconButton color="inherit" onClick={() => setSearchOpen(!searchOpen)}>
              <SearchIcon />
            </IconButton>
            {searchOpen && <InputBase placeholder="Pesquisar…" inputProps={{ 'aria-label': 'search' }} />}
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon style={{ color: '#DBE2E0', cursor: "pointer" }} />
            </IconButton>
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

        <SideMenu isOpen={menuOpen}>
          <LayersMenu>
            <ProfilePhotoMenu src={conversation.image} />
            <Name>{conversation.name}</Name>
            <Status>{conversation.lastSeen}</Status>
          </LayersMenu>

          <LayersMenu>
            <Name>Mídias</Name>
            <Medias>
              <MediaContent src="https://img.freepik.com/psd-gratuitas/modelo-a4-feliz-dia-dos-pais-039_318354-1310.jpg?w=740&t=st=1705285505~exp=1705286105~hmac=f968d1b61aa5ba2a4399eeeda838e4d4120698804079333fe1c96f8ad1af40c0" alt='mediacode=1334234534246' />
              <MediaContent src="https://img.freepik.com/psd-gratuitas/desenho-de-modelo-de-festa-de-musica-house_23-2151059300.jpg?w=1060&t=st=1705285517~exp=1705286117~hmac=cbfed08936c4d43984542e22f00b00731c999db7ece823a71e8643e7c7dd895c" alt='mediacode=1334234534246' />
              <MediaContent src="https://img.freepik.com/psd-gratuitas/modelo-de-folheto-vertical-de-dia-dos-namorados_23-2149396907.jpg?w=740&t=st=1705285531~exp=1705286131~hmac=dcfba78056475353d0bd5d391b0f45452c548d8a60af6db9c8c5b77cf9efc574" alt='mediacode=1334234534246' />
              <MediaContent src="https://img.freepik.com/psd-gratuitas/modelo-texturizado-de-midia-social-para-campanhas-de-festa-junina-e-arraial_314999-1835.jpg?w=740&t=st=1705285549~exp=1705286149~hmac=d70bb0f627fa930598d374e8a309bb8e1b3ebe55fb5169a23cc722d6fc0d9a4b" alt='mediacode=1334234534246' />
            </Medias>
          </LayersMenu>

          <LayersMenu>
            <LayersMenuOptions>
              <BlockIcon style={{ color: 'red' }} /> <span style={{ color: 'red' }} onClick={() => handleChatChange(conversation.id)}>Bloquear</span>
              <SettingsIcon /> <span>Configurações</span>
              <LocationOnIcon /> <span>Localização</span>
            </LayersMenuOptions>
          </LayersMenu>

          <KonzenSigned src={KonzenDev} />
        </SideMenu>

        <Messages>
          {conversation.messages && conversation.messages.map((message, index) => (
            <ChatMessage direction={index % 2 === 0 ? "right" : "left"} key={index}>
              <div className="message">
                <p>{message.text}</p>
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
