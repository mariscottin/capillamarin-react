import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

import Logo from '../assets/img/logo.png';

import './Login.css';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (email && password) {
            auth.signInWithEmailAndPassword(email, password)
                .then(auth => {
                    if (auth) {
                        setIsLoading(false);
                        console.log(history)
                        history.push('/admin')
                    }
                })
                .catch(err => {
                    alert(err.message);
                    setIsLoading(false);
                })
        }
    }

    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__brandContainer">
                    <img src={Logo} alt="Capilla Marin" />
                    <h1>Admin Login</h1>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email:</label>
                        <input type="text" className="form-control" placeholder="Ingresar Email" id="emailInput" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Contraseña:</label>
                        <input type="password" className="form-control" placeholder="Ingresar Contraseña" id="passwordInput" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="login__submitContainer">
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit} disabled={isLoading ? true : false}>
                            {!isLoading &&
                                'Ingresar'
                            }
                            {isLoading &&
                                'Cargando...'
                            }
                        </button>
                    </div>
                    <div className='login__backContainer'>
                        <Link to="/">Volver</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;
