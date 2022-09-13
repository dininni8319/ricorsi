
interface Props {
    imageUrl: string | undefined;
};

const LogoComponent: React.FC<Props> = ({ imageUrl }) => {
    return (
        <>
            <a href="https://www.cienneffe.com/" target='blank' className=" transparent">
                <img src={imageUrl} alt="logo cienneffe" />
            </a>
        </>
    )
}

export default LogoComponent; 
