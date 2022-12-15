import useInput from '../../../Hooks/useInput';
import { UserType } from '../../interfaces/interfaces';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Contexts/Config';
import { AuthContext } from '../../../Contexts/Auth';
import { LoginStyled, InputSection, ButtonStyle } from './style';
import { Link } from 'react-router-dom';
import { SideHeader } from '../../UI/index';
import { defaultLoginData } from '../../UI/FormComponents/defaultData';

const Login = () => {
    const {
        api_urls: { backend }
    } = useContext(ConfigContext);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { data, handleData } = useInput(defaultLoginData);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch(`${backend}/api/cienneffe/login`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((resp) => resp.json())
            .then((data) => {
                login(
                    data.data.first_name,
                    data.data.last_name,
                    data.token,
                    data.data.id
                );
                navigate('/');
            });
    };

    return (
        <LoginStyled onSubmit={handleLogin}>
            <SideHeader />
            <section className="row-form mt-12">
                <InputSection className="mb-5 flex flex-col">
                    <h1>Entra</h1>
                    <label htmlFor="userEmailLogin" className="mb-2">
                        Inserisci un Email
                    </label>
                    <input
                        type="email"
                        id="userEmailLogin"
                        name="email"
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
                        onChange={handleData}
                    />
                    <ButtonStyle type="submit">Entra</ButtonStyle>
                    <Link to="/register" className="pt-3 text-sm">
                        Non sei Registrato? Registrati!
                    </Link>
                </InputSection>
            </section>
        </LoginStyled>
    );
};

export default Login;
