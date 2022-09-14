import NavItem from './NavItem';
import LogoComponent from './LogoComponent';
import classes from './style.module.css';
import logo from '../../../assets/icons/cnf_img.png';

const Navbar = () => {
    return (
        <nav className={`flex justify-around items-center sticky top-0 z-20 ${classes['navbar-custom']}`}>
            <ul className='md:static fixed top-2 md:flex justify-between items-center md:bg-transparent w-10/12 bg-emerald-500 text-white space-x-5  md:space-y-0 space-y-5'>
                <LogoComponent imageUrl={logo} w='60px' h="60px"/>
                <NavItem content="Home" href='/' />
                <NavItem content="Avvio Ricorso" href='/work_flow' />
                <NavItem content="Ricorsi" href='/ricorsi' />
            </ul>
        </nav> 
    );
}

export default Navbar;
