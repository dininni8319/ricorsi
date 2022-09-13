import NavItem from './NavItem';
/* import LogoComponent from './LogoComponent'; */
import classes from './style.module.css';
import logo from '../../../assets/icons/logo_inv2.png';

const Navbar = () => {
    return (
        <nav className={`flex justify-around items-center sticky top-0 z-20 ${classes['navbar-custom']}`}>
            <ul className='md:static fixed bottom-0 top-12 md:flex justify-between items-center md:bg-transparent w-10/12 bg-emerald-500 text-white space-x-7  md:space-y-0 space-y-5 p-2'>
                {/* <LogoComponent logo={logo} /> */}
                <NavItem content="Home" href='/' />
                <NavItem content="Ricorsi" href='/ricorsi' />
                <NavItem content="Avvio Ricorso" href='/work_flow' />
            </ul>
        </nav> 
    );
}

export default Navbar;
