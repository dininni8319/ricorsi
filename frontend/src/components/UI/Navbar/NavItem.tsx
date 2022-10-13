import { Link } from "react-router-dom";

export interface LinkProps {
  content: string;
  href: string;
}

const NavItem: React.FC<LinkProps> = ({ content, href }) => {
  return (
    <li className="font-bold text-2xl">
      <Link to={href}>{content}</Link>
    </li>
  );
};

export default NavItem;
