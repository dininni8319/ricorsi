import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Contexts/Config';
import { AuthContext } from '../../../Contexts/Auth';
import { LoginStyled, ButtonStyle } from '../Login/style';
import { InputSection } from '../Login/style';
import { Link } from 'react-router-dom';
import { SideHeader } from './../../UI/index';
import useInput from '../../../Hooks/useInput';
import { defaultRegisterData } from '../../UI/FormComponents/defaultData';

const Register = () => {
    const navigate = useNavigate();

    const {
        api_urls: { backend }
    } = useContext(ConfigContext);
    const { user, login }: any = useContext(AuthContext);

    const { data, handleData } = useInput(defaultRegisterData);
    // console.log(password.value, passwordConfirm.value);

    const SignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (data.password === data.password_confirmation) {
            fetch(`${backend}/api/cienneffe/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((resp) => {
                    if (resp.ok) {
                        navigate('/');

                        return resp.json();
                    } else {
                        alert('error');
                    }
                })
                .then(() => {
                    fetch(`${backend}/api/cienneffe/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: data.email,
                            password: data.password
                        })
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
                });
        }
    };

    return (
        <LoginStyled onSubmit={SignUp} className="form-custom">
            <SideHeader />
            <section className="row-form mt-5">
                <InputSection className="mb-3 flex flex-col">
                    <h1>Registrati</h1>
                    <label className="form-label mb-2" htmlFor="userName">
                        Inserisci il tuo nome
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="first_name"
                        onChange={handleData}
                    />
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="userName">
                        Inserisci il tuo Cognome
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="last_name"
                        onChange={handleData}
                    />
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="userMail">
                        Inserisci un Email
                    </label>
                    <input
                        type="email"
                        id="userMail"
                        name="email"
                        onChange={handleData}
                    />
                </InputSection>
                <InputSection className="mb-5 flex flex-col">
                    <label
                        className="form-label mb-2 font-light"
                        htmlFor="userPassword"
                    >
                        Inserisci una nuova Password
                    </label>
                    <input
                        type="password"
                        id="userPassword"
                        onChange={handleData}
                        name="password"
                    />
                </InputSection>
                <InputSection className="flex flex-col">
                    <label
                        className="form-label mb-2"
                        htmlFor="userPasswordConfirm"
                    >
                        Conferma la Password
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="userPasswordConfirm"
                        onChange={handleData}
                    />
                    <ButtonStyle type="submit">Registrati</ButtonStyle>
                    <Link to="/login" className="pt-3 text-sm">
                        Sei Registrato? Entra!
                    </Link>
                </InputSection>
            </section>
        </LoginStyled>
    );
};

export default Register;
