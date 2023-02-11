import { useForm } from "../hooks/useForm"

import '../styles/login.css'

export const Login = () => {

    const { form: { email, password }, handleChange } = useForm({ email: '', password: '' });
    const handleSubmit = async(event) => {
        event.preventDefault();
        fetch('http://localhost:8080/users/login', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        .then( resp => resp.json() )
        .then(( data ) => {
            console.log(data)
        });

    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="card_title">
                    LiveChat
                </h1>
                <form className="mt-8" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="form_label mb-2">Email</label>
                    <input 
                        className="form_field"
                        type="email"
                        name="email"
                        value={ email }
                        onChange={ handleChange }
                        autoComplete="off"
                    />
                    <label htmlFor="password" className="form_label mt-8 mb-2">Password</label>
                    <input 
                        className="form_field mt-8"
                        type="password"
                        name="password"
                        value={ password }
                        onChange={ handleChange }
                        autoComplete="off"
                    />
                    <button className="btn btn--blue mt-8">Login</button>
                </form>
            </div>
        </div>
    )
}
