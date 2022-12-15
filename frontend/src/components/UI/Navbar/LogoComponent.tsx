import { Fragment } from 'react';
import { LogoProps } from '../../interfaces/interfaces';

const LogoComponent: React.FC<LogoProps> = ({ imageUrl }) => {
    return (
        <>
            <a href="https://www.cienneffe.com/" target="blank">
                <img
                    src={imageUrl}
                    alt="logo cienneffe"
                    loading="lazy"
                    className="style-logo"
                />
            </a>
        </>
    );
};

export default LogoComponent;
