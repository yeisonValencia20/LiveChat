import React from 'react'

import { Chat, Contacts, Login } from './';
import { useSocket } from '../hooks/useSocket'
import '../styles/chatroom.css';

export const ChatRoom = () => {
    
    const { conectado, emitMessage } = useSocket();

    return (
        // <div className='chatroom'>
        //     <Contacts />
        //     <Chat 
        //         emitMessage={emitMessage}
        //     />
        // </div>
        <Login />
    )
}
