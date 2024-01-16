import React, { useState } from 'react';
import { db, auth } from '../../server/firebaseConfig'; 
import { serverTimestamp } from 'firebase/firestore';
import {SendMessageStyles, Input, EmojiPickerStyles} from'./styles'
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AddIcon from '@material-ui/icons/Add';
import MicIcon from '@material-ui/icons/Mic';
import Picker from 'emoji-picker-react';
import EditIcon from '@material-ui/icons/Edit';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import AttachFileIcon from '@material-ui/icons/AttachFile';

export function Message() {
    const [input, setInput] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const onEmojiClick = (emojiObject, event) => {
        setInput(input + emojiObject.emoji);
    };

    const sendMessage = (event) => {
        event.preventDefault();

        const chatId = Math.floor(1000 + Math.random() * 9000);
        const userId = auth.currentUser.uid;

        // aqui iria a logica de enviar a mensagem se tivesse a integração
    }

    const handleInputChange = (event) => {
        setInput(event.target.value);
        setIsInputEmpty(event.target.value === '');
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <SendMessageStyles>
                <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                    <InsertEmoticonIcon style={{ color: '#FDF5E7' }} />
                </IconButton>
                <EmojiPickerStyles showEmojiPicker={showEmojiPicker}>
                    {showEmojiPicker && <Picker onEmojiClick={onEmojiClick} />}
                </EmojiPickerStyles>
                <IconButton onClick={handleClick}>
                    <AddIcon style={{ color: '#FDF5E7' }} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
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
                <Input placeholder='Digite sua mensagem...' onChange={handleInputChange} value={input} />
                <IconButton onClick={sendMessage} type="submit">
                    {isInputEmpty ? <MicIcon style={{ color: '#FDF5E7' }} /> : <SendIcon style={{ color: '#FDF5E7' }} />}
                </IconButton>
            </SendMessageStyles>
        </>
    );
}
