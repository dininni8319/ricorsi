import { useState } from "react";
import useInput from '../../../Hooks/useInput';
import { UserType } from '../../interfaces/interfaces';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Contexts/Config';
import { AuthContext } from '../../../Contexts/Auth';
import { LoginStyled, InputSection, ButtonStyle } from './style';
import { Link } from 'react-router-dom';
import { SideHeader, Spinner } from '../../UI/index';
import { defaultLoginData } from '../../UI/FormComponents/defaultData';

const Login = () => {
    const {
        api_urls: { backend }
    } = useContext(ConfigContext);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { data, error, setError, handleData } = useInput(defaultLoginData);
    const [ loading, setLoading ] = useState(false)
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        fetch(`/api/login`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.token) {
                    login(
                        data.data.first_name,
                        data.data.last_name,
                        data.token,
                        data.data.id
                    );
                    setLoading(false);
                    navigate('/');
                } else {
                   setError(data.message)
                }
            });
    };

    return (
        <LoginStyled onSubmit={handleLogin}>
            <SideHeader />
            <section className="row-form mt-12">
                <InputSection className="mb-5 flex flex-col">
                    <h1 className='text-start'>Entra</h1>
                    <label htmlFor="userEmailLogin" className="mb-2">
                        Inserisci un Email
                    </label>
                    <input
                        type="email"
                        id="userEmailLogin"
                        name="email"
                        placeholder={'Email'}
                        onChange={handleData}
                    />
                </InputSection>
                <InputSection className="mb-5 flex flex-col">
                    <label htmlFor="passwordLogin" className="mb-2">
                        Inserisci una Password
                    </label>
                    <input
                        type="password"
                        id="passwordLogin"
                        name="password"
                        placeholder={'Password'}
                        onChange={handleData}
                    />
                      {error && <span className='text-red-600 py-1 text-sm'>{error}</span>}
                    <ButtonStyle 
                      type="submit" 
                      disabled={!data.email 
                        || !data.password 
                        || loading
                      }
                      >{!loading ? 'Entra' : <Spinner /> } </ButtonStyle>
                    <Link to="/send_email" className="pt-3 text-sm">
                        Hai dimenticato la password?
                    </Link>
                </InputSection>
            </section>
        </LoginStyled>
    );
};

export default Login;
