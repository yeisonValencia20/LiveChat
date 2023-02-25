import { Navigate } from 'react-router-dom';

import { Chat, Contacts, Button } from './';
import { logout } from '../helpers/logout';

import { useState } from 'react';

import { useSocket } from '../hooks/useSocket';

import '../styles/chatroom.css';

export const ChatRoom = ({ valid }) => {
    const [chatSelected, setChatSelected] = useState();
    const [messages, setMessages] = useState([]);

    const handleChatSelected = ( uid ) => {
        setChatSelected(uid);
    }

    const handleMessages = ( message, name = '', receive = false) => {
        setMessages(prevMessages => [...prevMessages, {
            receive,
            name,
            message
        }])
    }

    const { usersConnected, emitMessage } = useSocket(handleMessages);
    
    return valid
        ? 
            (<>
                <div className='chatroom'>
                    <Contacts 
                        users={usersConnected} 
                        handleChatSelected={handleChatSelected}
                    />
                    {
                        chatSelected
                        && <Chat 
                                emitMessage={emitMessage}
                                chatSelected={chatSelected}
                                messages={messages}
                                onMessages={handleMessages}
                            />
                    }
                    
                </div>
                <Button text='Logout' onClick={logout}/>
            
            </>)
        : <Navigate to={'/login'} />
}
