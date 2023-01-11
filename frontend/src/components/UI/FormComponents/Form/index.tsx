import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FormProps, Methods } from '../../../interfaces/interfaces';
import { baseURL } from '../../../Utilities/index';
import { FormContainer } from './style';
import { Modal } from '../../index';

const Form: React.FC<FormProps> = ({
    id,
    title,
    navPath,
    createPath,
    subMitBtn,
    children,
    data,
    method
}) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    
    const formData = new FormData();
    console.log(id);
    
    if (id) {
       formData.append("_method", 'PATCH')
    }

    for (let key in data) {
        formData.append(key, data[key]); 
    }
    
    let verb = method?.toLowerCase() || 'post';
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         
        //post a ricorso
        const config: any = { 
          method: method ? method : 'POST',
          headers: {'Content-Type': 'multipart/form-data'},
        }
        
        axios[verb as Methods](`${baseURL}/api/cienneffe/${createPath}/${id ? id : ''}`, formData, config)
            .then((data: any) => {
                               
                if (data?.data.success) {
                    setMessage(data?.data.message);
                    setIsOpen(true);
                    setTimeout(() => {
                        navigate(`/${navPath}/${data?.data.id}`);
                    }, 2000);
                } else {
                    navigate('/home');
                }
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <h1>{title}</h1>
            {/* {errors && errorTag(errors?.message)} */}
            <section className="form-row">
                {children}
                <div className="flex justify-center items-center w-full">
                    <button className="btn-send border-solid text-white mt-5 py-2 w-full">
                        {subMitBtn}
                    </button>
                </div>
            </section>
            {isOpen && <Modal setIsOpen={setIsOpen} message={message} />}
        </FormContainer>
    );
};

export default Form;
