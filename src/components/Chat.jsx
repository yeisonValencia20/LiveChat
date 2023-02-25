import { nanoid } from 'nanoid';

import { Message } from './Message';

import { useForm } from '../hooks/useForm';

import '../styles/chat.css';

export const Chat = ({ emitMessage, chatSelected, messages, onMessages }) => {

    const { form: { chat_input }, handleChange, resetValue } = useForm({ chat_input: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        onMessages(chat_input);
        emitMessage(chatSelected, chat_input);
        resetValue();
    }

    return (
        <div className="chat">
            <div className="chat_conversacion">
                {
                    messages.map(message => (
                        <Message 
                            key={nanoid()}
                            className={'chat_message' + (message.receive ? '--receive' : '--send')}
                            user={message.name}
                            message={message.message}
                        />
                    ))
                }
            </div>
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
