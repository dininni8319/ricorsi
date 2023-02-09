import { useState, useContext } from 'react';
import classes from './style.module.css';
import { ConfigContext } from "../../../Contexts/Config";
import { useNavigate } from "react-router";
import { LoginStyled, ButtonStyle } from '../../Views/Login/style';
import { SideHeader } from './../../UI/index';

const PasswordResetForm = ({ token }: { token?: string}) => {

  const navigate = useNavigate();
  let { api_urls } = useContext(ConfigContext);
  const [formData, setFormData] = useState({
    password: '',
    password_confirm: '',
    token: '',
  });

  const [ error, setError ] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    fetch(`/api/reset`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        // Authorization: `Bearer ${user?.token}`
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then(data => {
        if (data.success) {
          navigate('/login')
        } else {
          setError(data.message)
        }
      })
  };

  const handleFieldChange = (e:any) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      ['token']: token || ''
    });
  };

  return (
    <LoginStyled className="form-custom"
      onSubmit={handleSubmit}
    >
      <SideHeader />
      <section className="row-form p-5">
        <h2 className='h2 mb-3 font-extrabold'>Crea le nuove credenziali!</h2>
        <div className="mb-3">
          <input
            placeholder='Nuova Password'
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
            className={`form-control ${classes['form-group-reset-p']}`}
          />
        </div>
        <div className="mb-3">
          <input
            placeholder='Conferma la Password'
            value={formData.password_confirm}
            name="password_confirm"
            onChange={handleFieldChange}
            type="password"
            className={`form-control ${classes['form-group-reset-p']}`}
          />
          {error && <span className='text-red-500 py-1 text-sm'>{error}</span>}
        </div>
        <div className="col-12">
          <ButtonStyle
            type="submit"
            className="btn-grad px-5 fw-bold"
            disabled={!formData.password_confirm || !formData.password}
          >
            Invia
          </ButtonStyle>
        </div>
    </section>
  </LoginStyled>
  );
};


export default PasswordResetForm;
