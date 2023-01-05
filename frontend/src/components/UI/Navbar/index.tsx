import NavItem from './NavItem';
import { useContext } from 'react';
import LogoComponent from './LogoComponent';
import { NavbarStyleComponent } from './style';
import Dropdown from './dropDown';
import logo from '../../../assets/icons/logo_inv2.png';
import { memo } from 'react';
import { AuthContext } from '../../../Contexts/Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <NavbarStyleComponent>
            <LogoComponent imageUrl={logo} />

            {user && (
                <Dropdown title="Ricorsi">
                    <>
                        <NavItem content="Ricorsi" href="/" />
                        <NavItem content="Avvia Ricorso" href="/ricorsi" />
                    </>
                </Dropdown>
            )}

            {user && (
                <Dropdown title="Cartoline">
                    <>
                        <NavItem content="Caroline" href={`/cartoline`} />
                        <NavItem
                            content="Avvia una Caroline"
                            href={`/work_flow`}
                        />
                    </>
                </Dropdown>
            )}
            {user && (
                <Dropdown title="Riscossione">
                    <>
                        <NavItem content="Riscossione" href={`/riscossione`} />
                        <NavItem
                            content="Avvia un Lotto di Spedizione"
                            href={`/form_riscossione`}
                        />
                    </>
                </Dropdown>
            )}
            {user && (
                <Dropdown title="Ente">
                    <>
                        <NavItem content="Ente" href={`/ente`} />
                        <NavItem
                            content="Crea un nuovo ente"
                            href={`/form_ente`}
                        />
                    </>
                </Dropdown>
            )}
            {user && (
                <span className="nav-label-style text-base capitalize">
                    ciao {user?.first_name}
                </span>
            )}
            {user && (
                <FontAwesomeIcon
                    onClick={logout}
                    icon={faArrowRightFromBracket}
                    className={`fa-1x mx-1 text-white logout-icon-style my-2`}
                />
            )}
        </NavbarStyleComponent>
    );
};

export default memo(Navbar);
