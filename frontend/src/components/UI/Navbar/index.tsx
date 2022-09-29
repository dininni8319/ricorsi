import NavItem from './NavItem';
import LogoComponent from './LogoComponent';
import{ NavbarStyleComponent }from './style';
import "./style.css";
import logo from '../../../assets/icons/logo_inv2.png';
import { memo } from 'react';

const Navbar = () => {
    return (
            <NavbarStyleComponent>
                <ul className='md:static fixed md:flex justify-between items-center md:bg-transparent w-10/12 space-x-5 md:space-y-0'>
                    <LogoComponent imageUrl={logo} w='100%' h="100%"/>
                    <NavItem content="Ricorsi" href='/' />
                    <NavItem content="Avvio Ricorso" href={`/work_flow`} />
                    <NavItem content="Cartoline" href='/ricorsi' />
                </ul>
            </NavbarStyleComponent> 
    );
}

export default Navbar;
