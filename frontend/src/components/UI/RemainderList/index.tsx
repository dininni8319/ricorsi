import { funFormatDate } from '../../Utilities/index';
import { baseURL } from '../../Utilities/index';
import { useState } from 'react';
import { RemainderListStyle } from './style';
import { Modal } from '../index';
import useHttp from '../../../Hooks/useHttp';

const RemainderList = ({ tasks, setTasks }: { tasks: any; setTasks: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleDelete = (event: any, id: number) => {
        event.preventDefault();

        fetch(`${baseURL}/api/cienneffe/task/delete/${id}}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === true) {
                    setTasks((prev: any) => [
                        ...prev.filter((el: any) => el.id !== data.task.id)
                    ]);
                }
            });
    };

    return (
        <div className="md:flex md:flex-wrap w-10/12">
            {tasks?.map((el: any) => {
                return (
                    <RemainderListStyle>
                        <ul
                            className="bg-white shadow-lg p-4 m-2 text-sm"
                            key={el.id}
                        >
                            <li>
                                <span>Reminder at:</span>
                                {funFormatDate(el.reminder_at)}
                            </li>
                            <li>
                                <span className=" mr-1">
                                    Scadenza del compito:
                                </span>
                                {funFormatDate(el.scadenza_del_compito)}
                            </li>
                            <li>
                                <span>Descrizione del compito:</span>
                                {el.descrizione_compito}
                            </li>
                            <li>
                                <span>Creato il:</span>
                                {funFormatDate(el.created_at)}
                            </li>
                            <button
                                onClick={() => {
                                    setIsOpen(true);
                                    setMessage(
                                        'Are you sure you want delete this Reminder!'
                                    );
                                }}
                                className="bg-red-500 text-white my-2 p-1"
                            >
                                Delete
                            </button>
                        </ul>
                        {isOpen && (
                            <Modal
                                setIsOpen={setIsOpen}
                                message={message}
                                handleDelete={handleDelete}
                                id={el.id}
                            />
                        )}
                    </RemainderListStyle>
                );
            })}
        </div>
    );
};

export default RemainderList;
