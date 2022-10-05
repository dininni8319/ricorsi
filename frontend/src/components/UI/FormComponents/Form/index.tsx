// import { string } from "yup";
import { useNavigate } from 'react-router';
import { FormProps } from "../../../interfaces/interfaces";
import { baseURL } from "../../../Utilities/index";
import FormWrapper from '../FormWrapper';
import { FormContainer } from "../FormRicorsi/style";

const Form: React.FC<FormProps> = ({ id, title,detailPath, navPath, createPath, subMitBtn, children, data }) => {
    
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();

        //post a ricorso
        fetch(`${baseURL}/api/cienneffe/${createPath}/${id ? id : ''}`, {
            method: 'POST',
            headers: { 'Content-Type' : "application/json"},
            body: JSON.stringify(data)
        })
        .then(response => {
            
            if (response.status === 200 || response.ok) {
                fetch(`${baseURL}/api/cienneffe/${detailPath ? detailPath : ''}`)
                    .then(response => response.json())
                    .then(data => {
                        navigate(`/${navPath}/${data.id}`)
                    }).catch((err) => {
                        alert(err)
                    })
                     
            } else {
                alert('Something went wrong!')
            }
        })
        .then(() => {
            
        })
    }
 
    return (
        <FormContainer onSubmit={handleSubmit}>
            <h1 className='font-bold text-amber-500 text-3xl'>{title}</h1>
            <section className="form-row"> 
                 {children}
                <button className='btn-send border-solid text-white mt-5 py-2'>{subMitBtn}</button>
            </section>
        </FormContainer>
      
    )
}

export default Form;