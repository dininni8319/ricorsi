import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from '../../../Contexts/Config';
import Router from '../Router';
import { AuthProvider } from '../../../Contexts/Auth';

const App = () => {
    
    return (
        <ConfigProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </AuthProvider>
        </ConfigProvider>
    );
};

export default App;
