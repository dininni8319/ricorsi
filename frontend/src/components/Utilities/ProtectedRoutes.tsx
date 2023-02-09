import { useContext } from 'react';
import { ChildrenProps } from '../interfaces/interfaces';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/';
import { Frame } from '../UI';

const ProtectedRoute = ({ children }: ChildrenProps) => {
    const { user }: any = useContext(AuthContext);

    return user ? <Frame>{children}</Frame> : <Navigate to="/login" />;
};

export default ProtectedRoute;
