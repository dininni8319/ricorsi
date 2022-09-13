import NavItem from './NavItem';
import Logo from '../../../assets/icons/logo_inv2.png';
import classes from './style.module.css';

const Navbar = () => {
    return (
        <nav className={`flex justify-around items-center sticky top-0 z-20 ${classes['navbar-custom']}`}>
            <ul className='md:static fixed bottom-0 top-12 md:flex justify-between items-center md:bg- w-10/12 bg-gray-500 text-white space-x-7 md:text-gray-700 md:space-y-0 space-y-5 p-2'>
                <a href="https://www.cienneffe.com/" target='blank' className=" transparent">
                    <img src={Logo} alt="logo cienneffe" />
                </a>
                <NavItem content="Home" href='/' />
                <NavItem content="Ricorsi" href='/ricorsi' />
                <NavItem content="Avvio Ricorso" href='/work_flow' />
            </ul>
        </nav> 
    );
}

export default Navbar;
