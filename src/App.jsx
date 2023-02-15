import { Route, Routes } from 'react-router-dom';

import { Login } from './components';
import { ChatRoom } from './components/ChatRoom';

import { useValidateToken } from './hooks/useValidateToken';

export const App = () => {
    const { valid, handleLogin } = useValidateToken();

    return (
        <Routes>
            <Route 
                path='/login'
                element={<Login valid={valid} handleLogin={handleLogin} />}
            />
            <Route 
                path='/*'
                element={<ChatRoom valid={valid} />}
            />
        </Routes>
    )
}
