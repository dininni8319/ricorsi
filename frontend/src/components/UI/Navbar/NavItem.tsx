import { Link } from 'react-router-dom';

export interface MyComponentProps {
    content: string;
    href: string;
}
const NavItem:React.FC<MyComponentProps> = ({ content, href}) => {
    return (
        <li className='text-lg font-semibold'>
            <Link to={href}>{content}</Link>
        </li>
    )
}

export default NavItem;