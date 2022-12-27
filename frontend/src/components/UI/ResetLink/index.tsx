import { useState, useContext } from "react";
import classes from "./style.module.css";
import { AuthContext } from "../../../Contexts/Auth";
import { ConfigContext } from "../../../Contexts/Config";
import { ButtonStyle } from '../../Views/Login/style';

const ResetLink = () => {

  let { api_urls } = useContext(ConfigContext);
  let { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
  });
  const [ error, setError ] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();

    fetch(`${api_urls.backend}/api/cienneffe/forgot_password`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        // Authorization: `Bearer ${user?.token}`
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => console.log(data, 'testing the data'))
  };

  const handleFieldChange = (e:any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return ( 
    <form
      className='w-full md:flex justify-center'
      onSubmit={handleSubmit}
    >
      <div className="row flex-column p-5 w-6/12">
        <h2 className='h2 mb-3 fw-bold'>Invia il Link</h2>
        <label className='mb-3'>Inserisci la tua email e ti manderemo un link per il reset!</label>
        <div className="mb-3 col-md-8">
          <input
            placeholder={'Email'}
            value={formData.email}
            name="email"
            onChange={handleFieldChange}
            type="email"
            className={`form-control ${classes['form-group-reset-p']}`}
          />
        </div>
        <div className="d-flex justify-content-center">
          <ButtonStyle
            type="submit"
            className="btn-grad px-5 fw-bold"
            disabled={!formData.email}
          >
            Invia il link
          </ButtonStyle>
        </div>
      </div>
  </form>
   );
}
 
export default ResetLink;