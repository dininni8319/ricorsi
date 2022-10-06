import { Fragment } from "react";
import { LogoProps } from "../../interfaces/interfaces";

const LogoComponent: React.FC<LogoProps> = ({ imageUrl, w, h}) => {
    return (
        <>
            <a href="https://www.cienneffe.com/" target='blank'>
                <img src={imageUrl} alt="logo cienneffe" width={w} height={h} loading="lazy"/>
            </a>
        </>
    )
}

export default LogoComponent; 
