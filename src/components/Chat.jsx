
import { useForm } from '../hooks/useForm';
import '../styles/chat.css';

export const Chat = () => {

    const { form: { chat_input }, handleChange } = useForm({ chat_input: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target)
    }

    return (
        <div className='chatroom'>
            <div id="contactos">

            </div>
            <div className='chat'>
                <div className='chat_conversacion'></div>
                <form onSubmit={ handleSubmit }>
                    <input 
                        type='text'
                        name='chat_input' 
                        className='chat_escribir'
                        value={ chat_input }
                        onChange={ handleChange }
                    />
                </form>
            </div>
        </div>
    )
}
