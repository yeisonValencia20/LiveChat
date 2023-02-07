import React from 'react'
import { useSocket } from '../hooks/useSocket'

export const ChatRoom = () => {
    
    const conectado = useSocket();

    return (
        <div>
            <p>Conectado: { conectado ? 'Si' : 'no' }</p>
        </div>
    )
}
