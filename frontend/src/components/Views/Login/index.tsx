import useInput from '../../../Hooks/useInput';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Contexts/Config';
import { AuthContext } from '../../../Contexts/Auth';
import { LoginStyled, InputSection, ButtonStyle } from './style';
import { Link } from 'react-router-dom';
import { SideHeader } from '../../UI/index';
import { defaultLoginData } from "../../UI/FormComponents/defaultData";

const Login = () => {
    const { api_urls: { backend } } = useContext(ConfigContext);
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
                let loginData = data.data;
                login(
                    loginData.first_name,
                    loginData.last_name,
                    data.token,
                    loginData.id
                );
                navigate('/');
            });
    };

    return (
        <LoginStyled onSubmit={handleLogin}>
            <SideHeader />
            <section className="row-form mt-12">
                <InputSection className="mb-5 flex flex-col">
                    <h1 className={`text-black font-medium text-3xl mb-2`}>
                        Login
                    </h1>
                    <label htmlFor="userEmailLogin" className="mb-2">
                        Email
                    </label>
                    <input type="email" id='userEmailLogin' name='email' onChange={handleData} className="rounded"/>
                </InputSection>
                <InputSection className="mb-5 flex flex-col">
                    <label htmlFor="passwordLogin" className="mb-2">
                        Password
                    </label>
                    <input type="password" id='passwordLogin' name='password' onChange={handleData} className="rounded"/>
                    <ButtonStyle type="submit">Submit</ButtonStyle>
                    <Link to="/register" className="pt-3 text-sm">
                        Did you already register? Please Login!
                    </Link>
                </InputSection>
            </section>
        </LoginStyled>
    );
};

export default Login;
