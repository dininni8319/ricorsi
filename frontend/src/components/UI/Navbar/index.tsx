import NavItem from './NavItem';
import LogoComponent from './LogoComponent';
import{ NavbarStyleComponent }from './style';
import logo from '../../../assets/icons/cnf_img.png';
import { memo } from 'react';

const Navbar = memo(() => {
    return (
        <NavbarStyleComponent>
            <ul className='md:static fixed top-2 md:flex justify-between items-center md:bg-transparent w-10/12  space-x-5  md:space-y-0 space-y-5'>
                <LogoComponent imageUrl={logo} w='60px' h="60px"/>
                <NavItem content="Ricorsi" href='/' />
                <NavItem content="Avvio Ricorso" href={`/work_flow`} />
                <NavItem content="Cartoline" href='/ricorsi' />
            </ul>
        </NavbarStyleComponent > 
    );
})

export default Navbar;
