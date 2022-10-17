import NavItem from "./NavItem";
import LogoComponent from "./LogoComponent";
import { NavbarStyleComponent } from "./style";
import logo from "../../../assets/icons/logo_inv2.png";
import { memo } from "react";

const Navbar = () => {
  return (
    <NavbarStyleComponent>
      <LogoComponent imageUrl={logo} />
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="nav-label-style m-1">Ricorsi</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <NavItem content="Ricorsi" href="/" />
              <NavItem content="Avvia Ricorso" href="/ricorsi" />
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="nav-label-style m-1">Cartoline</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <NavItem content="Caroline" href={`/cartoline`} />
              <NavItem content="Avvia una Caroline" href={`/work_flow`} />
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="nav-label-style m-1">Riscossione</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <NavItem content="Riscossione" href={`/riscossione`} />
              <NavItem content="Avvia un Lotto di Spedizione" href={`/form_riscossione`} />
            </ul>
          </div>
    </NavbarStyleComponent>
  );
};

export default memo(Navbar);
