
import { useForm } from '../hooks/useForm';
import '../styles/chat.css';

export const Chat = ({ emitMessage }) => {

    const { form: { chat_input }, handleChange, resetValue } = useForm({ chat_input: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        emitMessage('63e6ffdbedbf0a0ef41fc4cc', chat_input);
        resetValue();
    }

    return (
        <div className="chat">
            <div className="chat_conversacion"></div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="chat_input"
                    className="chat_escribir"
                    value={chat_input}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </form>
        </div>
    )
}
