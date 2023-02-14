import { useEffect, useState } from "react";


export const useValidateToken = () => {

    const [valid, setValid] = useState(false);

    useEffect(() => {
        const { token } = JSON.parse(localStorage.getItem('token')) || { token: '' };
    
        fetch('http://localhost:8080/users/tokenvalidation', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${ token }`,
            }
        })
        .then( resp => { 
            if (resp.status === 200) {
                console.log('token valido');
                setValid(true);
            }
            else {
                console.log('token invalido');
                setValid(false);
            }
         })
         .catch( error => {
            console.log('token invalido');
         });
    }, []);

    const handleLogin = () => {
        setValid(true);
    }

    return { 
        valid,
        handleLogin
     };
}
