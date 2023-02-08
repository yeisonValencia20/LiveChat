import React from 'react'

import { Chat } from './Chat';
import { useSocket } from '../hooks/useSocket'
import '../styles/chatroom.css';

export const ChatRoom = () => {
    
    const conectado = useSocket();

    return (
        <Chat />
    )
}
