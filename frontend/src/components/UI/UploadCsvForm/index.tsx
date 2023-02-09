import styled from 'styled-components';
import { useState, useContext } from 'react';
import { ConfigContext } from "../../../Contexts/Config";
import axios from 'axios';

const ImportCsv = () => {
    const [file, setFile] = useState<any>([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const { api_urls: { backend }} = useContext(ConfigContext);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formatData = new FormData();

        if (file) {
            formatData.append('csv_file', file);
            axios
                .post(`/api/import_cartolina`, formatData)
                .then((response) => response)
                .then((data) => {
                    let message = data.data.message;

                    if (data.status === 200) {
                        setMessage(message);
                        setTimeout(() => {
                            setMessage('');
                        }, 2000);
                    }
                })
                .catch((err) => {
                    alert(err);
                });
        } else if (file === null) {
            setError('File is required');
            setTimeout(() => {
                setError('');
            }, 2000);
        }
    };

    const handleFile = (event: any) => {
        setFile(event.target.files[0]);
    };

    return (
        <>
            <ImportStyleComponent onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="csv_file">File CSV</label>
                    <input
                        type="file"
                        accept={'.csv'}
                        name="csv_file"
                        id="csv_file"
                        className="my-2"
                        onChange={handleFile}
                    />
                    <button type="submit">Import CSV File</button>
                    <a href={`${backend}/export_cartolina`} className="pt-2">
                        Export
                    </a>
                    {error && (
                        <p className="text-red-600 text-sm p-2">{error}</p>
                    )}
                    {message && (
                        <p className="text-green-600 text-sm p-2">{message}</p>
                    )}
                </div>
            </ImportStyleComponent>
        </>
    );
};

export default ImportCsv;

export const ImportStyleComponent = styled.form`
    display: flex;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        background: white;
        padding: 10px;
        border: 1px solid ${(props) => props.theme.borderGrayColor};
        width: 100%;
    }

    input {
        width: 80%;
    }

    label {
        font-weight: bold;
    }

    button {
        background-color: ${(props) => props.theme.buttonColor};
        color: ${(props) => props.theme.colorWhite};
        padding: 10px 30px;
        font-weight: 500;
    }
    @media only screen and (max-width: 765px) {
        div {
            width: 80%;
        }
    }
`;
