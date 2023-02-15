import { useEffect, useState } from "react";
import io from 'socket.io-client';

let socket = null; // se puede tambien io.connect('http://localhost:8080')

export const useSocket = () => {
    const [conectado, setConectado] = useState(false);

    const emitMessage = ( uid, message ) => {
        socket.emit('message', { uid, message });
    }

    useEffect(() => {
        socket = io('http://localhost:8080', {
            'extraHeaders': {
                'x-token': localStorage.getItem('token')
            }
        });

        socket.on('connect', () => {
            setConectado(true);
        });

        socket.on('disconnect', () => {
            setConectado(false);
        });

        socket.on('private-message', ({ name, message }) => {
            const chatWindow = document.querySelector('.chat_conversacion');
            chatWindow.innerHTML += `<p><strong>${name}</strong> ${message}</p>`;
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('private-message');
            socket.off('message');
        }
    }, []);

    return { 
        conectado,
        emitMessage
    };
}

