import { useContext } from 'react';
import { ChildrenProps } from "../interfaces/interfaces";
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/';

const ProtectedRoute = ({ children }: ChildrenProps) => {
    const { user } = useContext(AuthContext);

    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
