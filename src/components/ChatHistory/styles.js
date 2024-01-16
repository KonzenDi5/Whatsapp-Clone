import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border-bottom: 1px solid #3F3C3F42;
  cursor: pointer;
`;
export const Spacer = styled.div`
  flex-grow: 1;
`;

export const ChatInfo = styled.div`
display: flex;
flex-direction: column;
margin-right: 50px;
`;

export const ChatName = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

export const ChatMessage = styled.span`
  color: #666;
  font-size: 10px;
`;

export const ChatTime = styled.span`
  font-size: 0.8em;
  color: #999;

`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

