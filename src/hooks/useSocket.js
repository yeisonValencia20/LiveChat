import { useEffect, useState } from "react";
import io from 'socket.io-client';

let socket = null; // se puede tambien io.connect('http://localhost:8080')

export const useSocket = (handleMessages) => {
    const [usersConnected, setUsersConnected] = useState([]);

    const emitMessage = ( uid, message ) => {
        socket.emit('message', { uid, message });
    }

    useEffect(() => {
        socket = io('http://localhost:8080', {
            'extraHeaders': {
                'x-token': localStorage.getItem('token')
            }
        });

        socket.on('users-connected', ( user ) => {
            setUsersConnected(user);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });

        socket.on('private-message', ({ name, message }) => {
            // const chatWindow = document.querySelector('.chat_conversacion');
            // chatWindow.innerHTML += `<p className="chat_message--receive"><strong>${name}</strong> ${message}</p>`;
            handleMessages(message, name, true)
        });

        return () => {
            socket.disconnect();
        }
    }, []);

    return { 
        usersConnected,
        emitMessage
    };
}

