import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { ConfigContext } from "../../../Contexts/Config";
import {LoginStyled, ButtonStyle } from '../../Views/Login/style';
import { SideHeader } from '../../UI/index';

const ResetLink = () => {

  let { api_urls } = useContext(ConfigContext);
  const [formData, setFormData] = useState({
    email: '',
  });
  
  const [ error, setError ] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();

    fetch(`/api/forgot_password`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        // Authorization: `Bearer ${user?.token}`
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.success) {
          setError(data.message)
        } else {
          setError(data.message)
        }
      })
  };

  const handleFieldChange = (e:any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return ( 
    <LoginStyled onSubmit={handleSubmit} className="form-custom">
        <SideHeader />
        <section className="row-form p-5">
          <div className='w-6/12'>
            <h1 className='h2 mb-3 text-start'>Invia il Link</h1>
            <p className='mb-3 text-sm'>Inserisci la tua email e ti manderemo un link per il reset!</p>
            <div className="mb-3 col-md-8">
              <input
                placeholder={'Email'}
                value={formData.email}
                name="email"
                onChange={handleFieldChange}
                type="email"
                className={`form-control`}
              />
            </div>
            {error && <span className='text-red-500 py-1 text-sm'>{error}</span>}
            <div className="d-flex justify-content-center">
              <ButtonStyle
                type="submit"
                className="btn-grad px-5 fw-bold mb-3"
                disabled={!formData.email}
              >
                Invia il link
              </ButtonStyle>
            </div>
            <Link to='/login' className='text-base'>
                Vai al login!
            </Link>
          </div>
        </section>
    </LoginStyled>
   );
}
 
export default ResetLink;