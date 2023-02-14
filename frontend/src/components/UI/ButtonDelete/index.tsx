import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal } from "../index";

const ButtonDelete = ({ handleDelete, id }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-red-600 outline-none cursor-pointer w-18 px-3 py-2 font-semibold"
            >
                <FontAwesomeIcon icon={faTrashAlt} className={`fa-1x`} />
            </button>
            {isOpen && <Modal 
                           setIsOpen={setIsOpen} 
                           message='Sei sicuro di volerlo eliminare'
                           handleDelete={handleDelete} 
                           id={id}
                        />
            }
        </>
    );
};

export default ButtonDelete;
