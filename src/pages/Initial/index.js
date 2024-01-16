import React, { useState, useEffect } from "react";
import { Container, Header, Button, WhatsIcon, Menu, Content, Layer1, Layer2, ContentMessageLayer1, Layer1ImageMessage, LayerButtons, MessageLayer2, Title, Subtitle, ContentMessages, Text, TitleL2, VideoMessage } from "./styles";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../server/firebaseConfig"

import logo from "../../assets/whatlogo.png";
import message1 from "../../assets/message1.png";
import message3 from "../../assets/message_pt_3.png";
import message2 from "../../assets/message2.png";
import emoji from "../../assets/emojicoffre.png"
import messageL2 from "../../assets/messageslayer2.png"
import message4 from "../../assets/message4.png"
export const Initial = () => {
  // Verificando se o dispositivo é móvel usando useMediaQuery
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // Estado para controlar se o menu está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState(false);
  // Estado para verificar se o usuário está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Hook de navegação
  const navigate = useNavigate();

  // Efeito colateral que é executado após a renderização inicial
  useEffect(() => {
    // Adiciona um listener para verificar mudanças no estado de autenticação
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Se houver um usuário autenticado, atualiza o estado
        setIsAuthenticated(true);
      } else {
        // Se não houver usuário autenticado, atualiza o estado
        setIsAuthenticated(false);
      }
    });

    // Retorna uma função de limpeza para remover o listener quando o componente é desmontado
    return () => {
      unsubscribe();
    };
  }, []);

  // Função para lidar com o clique no botão de menu
  const handleMenuClick = () => {
    // Inverte o estado de menuOpen
    setMenuOpen(!menuOpen);
  };

  // Função para lidar com o clique no botão do WhatsApp Web
  const handleWhatsappWebClick = () => {
    // Redireciona para a página de registro se não estiver autenticado, caso contrário, redireciona para a página inicial
    if (isAuthenticated) {
      navigate("/home");
    } else {
      navigate("/register");
    }
  };


  return (
    <>
      <Container>
        <Header>
          {isMobile ? (
            <>
              <Button onClick={handleMenuClick}>{menuOpen ? "X" : "☰"}</Button>
              <Menu open={menuOpen}>
                <Button>Privacidade</Button>
                <Button>Recursos</Button>
                <Button>Central de ajuda</Button>
                <Button>Blog</Button>
                <Button>Saiba mais</Button>
              </Menu>
              <WhatsIcon src={logo} alt="Logo do WhatsApp" />
              <Button primary onClick={handleWhatsappWebClick}>
                Whatsapp Web
              </Button>
            </>
          ) : (
            <>
              <WhatsIcon src={logo} alt="Logo do WhatsApp" />
              <LayerButtons>
                <Button primary onClick={handleWhatsappWebClick}>
                  Whatsapp Web
                </Button>
                <Button>Privacidade</Button>
                <Button>Recursos</Button>
                <Button>Central de ajuda</Button>
                <Button>Blog</Button>
                <Button>Saiba mais</Button>
              </LayerButtons>
            </>
          )}
        </Header>
        <Content>
          <Layer1>
            <Fade>
              <Text>
                <Title>Envie mensagens com privacidade</Title>
                <Subtitle>Mensagens e chamadas privadas simples, seguras e gratuitas*, disponíveis em todo o mundo.</Subtitle>
    
                  <Button primary onClick={handleWhatsappWebClick}>
              </Text>
              <ContentMessages>
                <ContentMessageLayer1 src={emoji} alt="emoji" />
                <Layer1ImageMessage src={message1} alt="Mensagem" />
                <ContentMessageLayer1 src={message3} alt="mensagem" />
                <Layer1ImageMessage src={message2} alt="Mensagem" />
              </ContentMessages>
            </Fade>
          </Layer1>
          <Fade>
            <Layer2>
              <MessageLayer2 src={messageL2} alt="Messages" />
              <TitleL2>Com mensagens e chamadas privadas, você pode ser quem realmente é, conversar com liberdade e se aproximar das pessoas mais importantes da sua vida, não importa onde estejam.</TitleL2>
              <VideoMessage src={message4} alt="VideoMessage" />
            </Layer2>
          </Fade>
        </Content>
      </Container>
    </>
  );
};
