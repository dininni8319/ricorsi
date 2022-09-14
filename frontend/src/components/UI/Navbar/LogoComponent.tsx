import { LogoProps } from "../../interfaces/interfaces";

const LogoComponent: React.FC<LogoProps> = ({ imageUrl, w, h}) => {
    return (
        <>
            <a href="https://www.cienneffe.com/" target='blank' className=" transparent">
                <img src={imageUrl} alt="logo cienneffe" width={w} height={h}/>
            </a>
        </>
    )
}

export default LogoComponent; 
