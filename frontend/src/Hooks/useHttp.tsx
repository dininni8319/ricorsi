import { useState, useCallback } from 'react';
import { RequestConfigType } from '../components/interfaces/interfaces';

const useHttp = (applyData: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const sendRequest = useCallback(
        async (requestConfig: RequestConfigType) => {
            setIsLoading(true);
            setError('');

            try {
                const response = await fetch(requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body
                        ? JSON.stringify(requestConfig.body)
                        : null
                });

                if (!response) {
                    throw new Error('Request failed');
                }

                const data = await response.json();

                applyData(data);
            } catch (err: unknown) {
                let result = (err as Error).message;
                setError(result || 'The request waas not successfull!');
            }
            setIsLoading(false);
        },
        [applyData]
    );

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;
