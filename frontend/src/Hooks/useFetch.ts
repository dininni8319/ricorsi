import { useState, useEffect, useCallback } from 'react';
import { Methods } from '../components/interfaces/interfaces';
import axios from 'axios';

const useFetch = (endpoint: string, { verb = 'get', params = {} } = {}) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios[verb as Methods](endpoint, params)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [endpoint]);

    return {
        payload: data,
        setData,
        loading,
        error
    };
};

export default useFetch;
