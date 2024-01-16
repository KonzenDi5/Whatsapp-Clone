import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const SendMessageStyles = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
`

export const Input = styled.input`
    width: 90%;
    border-radius: 40px;
    border: none;
    padding: 5px;
    background-color: #2F525255;
    color: white;
`

export const EmojiPickerStyles = styled.div`
    position: absolute;
    bottom: 0;
    transform: translateY(${props => props.showEmojiPicker ? '0' : '100%'});
    transition: transform 0.3s ease-out;
`
