import { Link } from 'react-router-dom';

export interface LinkProps {
    content: string;
    href: string;
}
const NavItem:React.FC<LinkProps> = ({ content, href}) => {
    return (
        <li className='text-lg font-semibold'>
            <Link to={href}>{content}</Link>
        </li>
    )
}

export default NavItem;