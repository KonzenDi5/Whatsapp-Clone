import {
    Container,
    Header,
    Button,
    WhatsIcon,
    Menu,
    Content,
    Layer1,
    Layer2,
    ContentMessageLayer1,
    Layer1ImageMessage,
    LayerButtons,
    MessageLayer2,
    Title,
    Subtitle,
    ContentMessages,
    Text,
    TitleL2,
    VideoMessage
  } from "./styles";
  import { useMediaQuery } from "react-responsive";
  import { useState } from "react";
  import logo from "../../assets/whatlogo.png";
  import message1 from "../../assets/message1.png";
  import message3 from "../../assets/message_pt_3.png";
  import message2 from "../../assets/message2.png";
  import emoji from "../../assets/emojicoffre.png"
  import messageL2 from "../../assets/messageslayer2.png"
  import message4 from "../../assets/message4.png"
  import { Fade } from "react-reveal";
  
  export const Initial = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
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
                <Button primary>Whatsapp Web</Button>
              </>
            ) : (
              <>
                <WhatsIcon src={logo} alt="Logo do WhatsApp" />
                <LayerButtons>
                  <Button primary>Whatsapp Web</Button>
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
              <Button primary>Whatsapp Web</Button>
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
  