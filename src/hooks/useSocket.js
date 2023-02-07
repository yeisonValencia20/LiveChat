import { useEffect, useState } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:8080'); // se puede tambien io.connect('http://localhost:8080')

export const useSocket = () => {

    const [conectado, setConectado] = useState(false);

    useEffect(() => {

        socket.on('connect', () => {
            setConectado(true);
        });

        socket.on('disconnect', () => {
            console.log('se desconecto')
            setConectado(false);
        })

        socket.emit('saludo', { msg: 'hola me conecte a ti' }, (mensaje) => {
            console.log(mensaje)
        });

        return () => {
            socket.off('connection');
        }
    }, []);

    return conectado;
}

