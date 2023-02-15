import React from 'react'
import { Navigate } from 'react-router-dom';

import { Chat, Contacts } from './';
import { useSocket } from '../hooks/useSocket'

import '../styles/chatroom.css';

export const ChatRoom = ({ valid }) => {
    
    const { conectado, emitMessage } = useSocket();
    return valid
        ? 
            (<div className='chatroom'>
                <Contacts />
                <Chat 
                    emitMessage={emitMessage}
                />
            </div>)
        : <Navigate to={'/login'} />
}
