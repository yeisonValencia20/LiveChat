import { useEffect, useState } from "react";
import io from 'socket.io-client';

let socket = null; // se puede tambien io.connect('http://localhost:8080')

export const useSocket = () => {

    const [conectado, setConectado] = useState(false);

    const emitMessage = ( message, uid ) => {
        socket.emit('message', { msg: message, user: 'Yeison' }, ( payload ) => {
            const chatWindow = document.querySelector('.chat_conversacion');
            console.log(chatWindow);
            chatWindow.innerHTML += `<p><strong>${payload.user}</strong> ${payload.msg}</p>`;
        });
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

        return () => {
            socket.off('connect');
        }
    }, []);

    return { 
        conectado,
        emitMessage
    };
}

