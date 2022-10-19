import NavItem from "./NavItem";
import { useContext } from "react";
import LogoComponent from "./LogoComponent";
import { NavbarStyleComponent } from "./style";
import Dropdown from "./dropDown";
import logo from "../../../assets/icons/logo_inv2.png";
import { memo } from "react";
import { AuthContext } from '../../../Contexts/Auth';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  
  return (
    <NavbarStyleComponent>
      <LogoComponent imageUrl={logo} />

     {user && <Dropdown title="Ricorsi">
        <>
          <NavItem content="Ricorsi" href="/" />
          <NavItem content="Avvia Ricorso" href="/ricorsi" />
        </>
      </Dropdown>}

    {user && <Dropdown title="Cartoline">
        <>
          <NavItem content="Caroline" href={`/cartoline`} />
          <NavItem content="Avvia una Caroline" href={`/work_flow`} />
        </>
      </Dropdown>}
     {user && <Dropdown title="Riscossione">
        <>
          <NavItem content="Riscossione" href={`/riscossione`} />
          <NavItem
            content="Avvia un Lotto di Spedizione"
            href={`/form_riscossione`}
          />
        </>
      </Dropdown>}
      {user && <span className='text-xl text-green-500 font-bold'>{`Hello ${user?.first_name} ${user?.last_name}`}</span>}
      {user && <button type='submit' onClick={logout} className='text-green-600 text-2xl font-bolder'>Logout</button>}
    </NavbarStyleComponent>
  );
};

export default memo(Navbar);
