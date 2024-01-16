import { ChatContainer, ProfileImage, ChatInfo,ChatMessage,ChatName,ChatTime, Spacer } from "./styles";

export function ChatHistory ({ onClick, image, name, message, time }) {
    return (
      <ChatContainer onClick={onClick}>
        <ProfileImage src={image} alt={name} />
        <ChatInfo>
          <ChatName>{name}</ChatName>
          <ChatMessage>{message}</ChatMessage>
        </ChatInfo>
        <Spacer />
        <ChatTime>{time}</ChatTime>
      </ChatContainer>
    );
}
