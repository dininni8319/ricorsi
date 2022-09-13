
interface Props {
    imageUrl: string | undefined;
    w: string,
    h: string
};

const LogoComponent: React.FC<Props> = ({ imageUrl, w, h}) => {
    return (
        <>
            <a href="https://www.cienneffe.com/" target='blank' className=" transparent">
                <img src={imageUrl} alt="logo cienneffe" width={w} height={h}/>
            </a>
        </>
    )
}

export default LogoComponent; 
