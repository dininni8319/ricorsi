// import lakePhoto from './../../assets/maldives.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons';

const SideHeader = () => {
    return (
        <section className="section-img">
            <FontAwesomeIcon
                icon={faCameraAlt}
                className={`fa-3x mx-1 icon-custom-style`}
            />
            <h2>Welcome to Paradise</h2>
            <p>
               Where all your dreams come to life.
            </p>
            {/* <img src={lakePhoto} alt="" /> */}
        </section>
    );
};

export default SideHeader;