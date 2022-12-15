import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsIcons } from '../../interfaces/interfaces';
import React from 'react';

const FontAwesomeComponent: React.FC<PropsIcons> = ({ href, fontIcon }) => {
    return (
        <>
            <a
                href={href}
                className="me-5 text-decoration-none text-white"
                target="blank"
            >
                <FontAwesomeIcon icon={fontIcon} />
            </a>
        </>
    );
};

export default FontAwesomeComponent;
