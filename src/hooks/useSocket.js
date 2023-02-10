import { useEffect, useState } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:8080'); // se puede tambien io.connect('http://localhost:8080')

export const useSocket = () => {

    const [conectado, setConectado] = useState(false);

    const emitMessage = ( message ) => {
        console.log(message)
        socket.emit('message', { msg: message, user: 'Yeison' }, ( payload ) => {
            console.log(payload);
        });
    }

    useEffect(() => {

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

