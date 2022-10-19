import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Contexts/Config';
import { AuthContext } from '../../../Contexts/Auth';
import { RegisterStyle, ButtonStyle } from './style';
import { InputSection } from '../Login/style';
import { Link } from 'react-router-dom';
import { SideHeader } from './../../UI/index';
import useInput from "../../../Hooks/useInput";
import { defaultRegisterData } from "../../UI/FormComponents/defaultData";

const Register = () => {
    const navigate = useNavigate();

    const { api_urls: { backend } } = useContext(ConfigContext);
    const { user, login } = useContext(AuthContext);
    const { data, handleData } = useInput(defaultRegisterData);
    // console.log(password.value, passwordConfirm.value);
    const SignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (data.password === data.passwordConfirm) {
            fetch(`${backend}/api/users/register`, {
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
                    fetch(`${backend}/api/users/login`, {
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
        <RegisterStyle onSubmit={SignUp} className="form-custom">
            <SideHeader />
            <section className="row-form mt-5">
                <InputSection className="mb-3 flex flex-col">
                    <h1
                        className={`text-black font-medium text-3xl mb-3 mt-12`}
                    >
                        Register
                    </h1>
                    <label className="form-label mb-2" htmlFor="userName">
                        Enter your First Name
                    </label>
                    <input type="text" id="userName" name='first_name' onChange={handleData} className="rounded"/>
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="userName">
                        Enter your Last Name
                    </label>
                    <input type="text" id="userName" name='last_name' onChange={handleData} className="rounded"/>
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="userMail">
                        Enter your Email
                    </label>
                    <input type="email" id="userMail" name='email' onChange={handleData} className="rounded"/>
                </InputSection>
                <InputSection className="mb-5 flex flex-col">
                    <label
                        className="form-label mb-2 font-light"
                        htmlFor="userPassword"
                    >
                        Enter a new Password
                    </label>
                    <input type="password" id="userPassword" onChange={handleData} name='password' className="rounded"/>
                </InputSection>
                <InputSection className="flex flex-col">
                    <label
                        className="form-label mb-2"
                        htmlFor="userPasswordConfirm"
                    >
                        Confirm the entered Password
                    </label>
                    <input
                        type="password"
                        name='passwordConfirm'
                        id="userPasswordConfirm"
                        className="rounded"
                    />
                    <ButtonStyle type="submit">Register</ButtonStyle>
                    <Link to="/login" className="pt-3 text-sm">
                        Did you registerd already? Please Login!
                    </Link>
                </InputSection>
            </section>
        </RegisterStyle>
    );
};

export default Register;
