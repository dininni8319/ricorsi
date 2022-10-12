import NavItem from './NavItem';
import LogoComponent from './LogoComponent';
import{ NavbarStyleComponent }from './style';
import logo from '../../../assets/icons/logo_inv2.png';
import { memo } from 'react';

const Navbar = () => {
    return (
        <NavbarStyleComponent>
            <ul className='md:static fixed md:flex justify-between items-center md:bg-transparent w-10/12 space-x-2 md:space-y-0'>
                <LogoComponent imageUrl={logo} />
                <NavItem content="Ricorsi" href='/' />
                <NavItem content="Avvia Ricorso" href='/ricorsi' />
                <NavItem content="Caroline" href={`/cartoline`} />
                <NavItem content="Avvia una Caroline" href={`/work_flow`} />
            </ul>
        </NavbarStyleComponent> 
    );
}

export default memo(Navbar);
