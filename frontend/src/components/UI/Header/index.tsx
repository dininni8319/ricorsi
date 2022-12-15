import { HeaderComponent } from './style';
import { AuthContext } from '../../../Contexts/Auth';
import { useContext } from 'react';

const Header = ({ className }: any) => {
    const { user, logout } = useContext(AuthContext);
    return (
        <HeaderComponent className={className} user={user ? true : false}>
            <h3 className="h2-custom-class font-semibold uppercase">
                i professionisti dei crediti problematici
            </h3>
            <div className="overlay"></div>
        </HeaderComponent>
    );
};

export default Header;
