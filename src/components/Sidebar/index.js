import React, { useState } from 'react';  // Importa o React e o hook useState
import { db, auth } from '../../server/firebaseConfig';  // Importa o banco de dados e a autenticação do Firebase
import { serverTimestamp } from 'firebase/firestore';  // Importa a marca de tempo do servidor do Firebase
import {
  SendMessageStyles,
  Input,
  EmojiPickerStyles
} from './styles';  // Importa estilos e componentes necessários
import { IconButton, Menu, MenuItem } from '@material-ui/core';  // Importa componentes de botão e menu do Material-UI
import SendIcon from '@material-ui/icons/Send';  // Importa o ícone de enviar mensagem
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';  // Importa o ícone de inserir emoji
import AddIcon from '@material-ui/icons/Add';  // Importa o ícone de adicionar
import MicIcon from '@material-ui/icons/Mic';  // Importa o ícone de microfone
import Picker from 'emoji-picker-react';  // Importa o componente de seletor de emoji
import EditIcon from '@material-ui/icons/Edit';  // Importa o ícone de editar
import CameraAltIcon from '@material-ui/icons/CameraAlt';  // Importa o ícone de câmera
import DescriptionIcon from '@material-ui/icons/Description';  // Importa o ícone de descrição
import AttachFileIcon from '@material-ui/icons/AttachFile';  // Importa o ícone de anexar arquivo

export function Message() {
    // Estados locais
    const [input, setInput] = useState('');  // Estado para armazenar o texto de entrada
    const [isInputEmpty, setIsInputEmpty] = useState(true);  // Estado para verificar se o campo de entrada está vazio
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);  // Estado para controlar a exibição do seletor de emoji
    const [anchorEl, setAnchorEl] = useState(null);  // Estado para o elemento ancorado (menu de opções)

    // Função chamada quando um emoji é clicado
    const onEmojiClick = (emojiObject, event) => {
        setInput(input + emojiObject.emoji);
    };

    // Função para enviar mensagem
    const sendMessage = (event) => {
        event.preventDefault();

        const chatId = Math.floor(1000 + Math.random() * 9000);
        const userId = auth.currentUser.uid;

        // Aqui iria a lógica de enviar a mensagem se tivesse a integração
    };

    // Função chamada quando o conteúdo do campo de entrada muda
    const handleInputChange = (event) => {
        setInput(event.target.value);
        setIsInputEmpty(event.target.value === '');
    };

    // Função chamada quando o botão de menu é clicado
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Função para fechar o menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Área de envio de mensagem */}
            <SendMessageStyles>
                {/* Botão para mostrar ou ocultar o seletor de emoji */}
                <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                    <InsertEmoticonIcon style={{ color: '#FDF5E7' }} />
                </IconButton>
                {/* Seletor de emoji */}
                <EmojiPickerStyles showEmojiPicker={showEmojiPicker}>
                    {showEmojiPicker && <Picker onEmojiClick={onEmojiClick} />}
                </EmojiPickerStyles>
                {/* Botão para abrir o menu de opções */}
                <IconButton onClick={handleClick}>
                    <AddIcon style={{ color: '#FDF5E7' }} />
                </IconButton>
                {/* Menu de opções */}
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {/* Opções do menu */}
                    <MenuItem onClick={handleClose}>
                        <EditIcon /> Desenhar
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <CameraAltIcon /> Enviar uma imagem
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <DescriptionIcon /> Documento
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <AttachFileIcon /> Arquivo
                    </MenuItem>
                </Menu>
                {/* Campo de entrada de mensagem */}
                <Input placeholder='Digite sua mensagem...' onChange={handleInputChange} value={input} />
                {/* Botão de enviar mensagem ou microfone, dependendo se há texto de entrada */}
                <IconButton onClick={sendMessage} type="submit">
                    {isInputEmpty ? <MicIcon style={{ color: '#FDF5E7' }} /> : <SendIcon style={{ color: '#FDF5E7' }} />}
                </IconButton>
            </SendMessageStyles>
        </>
    );
}
