import NavItem from "./NavItem";
import LogoComponent from "./LogoComponent";
import { NavbarStyleComponent } from "./style";
import Dropdown from "./dropDown";
import logo from "../../../assets/icons/logo_inv2.png";
import { memo } from "react";

const Navbar = () => {
  return (
    <NavbarStyleComponent>
      <LogoComponent imageUrl={logo} />

      <Dropdown title="Ricorsi">
        <>
          <NavItem content="Ricorsi" href="/" />
          <NavItem content="Avvia Ricorso" href="/ricorsi" />
        </>
      </Dropdown>

      <Dropdown title="Cartoline">
        <>
          <NavItem content="Caroline" href={`/cartoline`} />
          <NavItem content="Avvia una Caroline" href={`/work_flow`} />
        </>
      </Dropdown>

      <Dropdown title="Riscossione">
        <>
          <NavItem content="Riscossione" href={`/riscossione`} />
          <NavItem
            content="Avvia un Lotto di Spedizione"
            href={`/form_riscossione`}
          />
        </>
      </Dropdown>
    </NavbarStyleComponent>
  );
};

export default memo(Navbar);
