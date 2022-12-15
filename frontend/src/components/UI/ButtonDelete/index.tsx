import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ButtonDelete = ({ handleDelete, id }: any) => {
    return (
        <button
            onClick={(event) => handleDelete(event, id)}
            className="text-red-600 outline-none cursor-pointer w-18 px-3 py-2 font-semibold"
        >
            <FontAwesomeIcon icon={faTrashAlt} className={`fa-1x`} />
        </button>
    );
};

export default ButtonDelete;
