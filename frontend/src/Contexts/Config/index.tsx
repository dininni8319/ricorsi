import { createContext } from 'react';
import {
    ChildrenProps,
    ConfigContextType
} from '../../components/interfaces/interfaces';

export const ConfigContext = createContext<ConfigContextType>({
    api_urls: {
        backend: ''
    }
});

export function ConfigProvider({ children }: ChildrenProps) {
    let proc = process.env;

    const api_urls = {
        backend:
            proc.NODE_ENV === 'development'
                ? proc.REACT_APP_LOCAL
                : proc.REACT_APP_PROD
    };

    return (
        <ConfigContext.Provider value={{ api_urls }}>
            {children}
        </ConfigContext.Provider>
    );
}
