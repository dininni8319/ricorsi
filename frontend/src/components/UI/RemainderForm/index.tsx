import { Input, SelectInput } from '../';
import { baseURL } from '../../Utilities/index';
import { selectTasks } from '../FormComponents/selectPropsTributi';
import { defaultRemainderData } from '../FormComponents/defaultData';
import useInput from '../../../Hooks/useInput';
import { RemainderStyleComponent } from './style';
import { useNavigate } from 'react-router';
import { useState, useEffect, useCallback, memo } from 'react';
import { Modal, RemainderList } from '../index';
import { Fasi } from '../../interfaces/interfaces';
import useHttp from '../../../Hooks/useHttp';

const RemainderForm = ({ slug }: { slug?: string }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [tasks, setTasks] = useState<any>([]);
    const { data, handleData } = useInput(defaultRemainderData);
    const disabled = !(data.scadenza_del_compito && true || (data.reminder && true))

    const getRicorsoTasks = useCallback(({ tasks }: { tasks: Fasi[] }) => {
        setTasks((prev: Fasi[]) => [...tasks]);
    }, []);

    const {
        isLoading,
        error,
        sendRequest: fetchAllTasks
    } = useHttp(getRicorsoTasks);

    useEffect(() => {
        fetchAllTasks({ url: `/api/tasks/${slug}` });
    }, [fetchAllTasks, isOpen]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch(`/api/taskrimender/${slug}}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === true) {
                    setMessage(data.message);
                    setIsOpen(true);
                    
                    setTimeout(() => {
                        setIsOpen(false);
                    }, 2000);
                } else {
                    setMessage(data.message);
                    setIsOpen(true);
                    navigate(`/ricorsi_detail/${slug}`);
                }
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <RemainderStyleComponent>
            <div>
                <form
                    className="p-5 bg-white mt-3 mb-5 shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <section className="mb-3 flex flex-col mx-3">
                        <h5 className="font-bold">Invia una notifica</h5>
                        <div className="">
                            <Input
                                type="date"
                                label="Scadenza del Compito"
                                name="scadenza_del_compito"
                                handleData={handleData}
                            />
                            <Input
                                type="text"
                                label="Descrizione Compito"
                                name="descrizione_compito"
                                handleData={handleData}
                            />
                        </div>
                        <div className="md:flex md:flex-col">
                            <SelectInput
                                selectProps={selectTasks}
                                handleData={handleData}
                            />
                            <button className={`btn-send border-solid ${disabled ? 'bg-orange-200': 'bg-orange-500' } text-white mt-5 py-2 w-full`}
                              disabled={disabled}
                            >
                                Inserisci
                            </button>
                        </div>
                    </section>
                    {isOpen && (
                        <Modal setIsOpen={setIsOpen} message={message} />
                    )}
                </form>
            </div>
            <div>
                <RemainderList tasks={tasks} setTasks={setTasks} />
            </div>
        </RemainderStyleComponent>
    );
};

export default memo(RemainderForm);
