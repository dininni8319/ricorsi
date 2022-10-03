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
                    <NavItem content="Avvia Ricorso" href='/ricorsi' />
                    <NavItem content="Caroline" href={`/work_flow`} />
                </ul>
            </NavbarStyleComponent> 
    );
}

export default memo(Navbar);
