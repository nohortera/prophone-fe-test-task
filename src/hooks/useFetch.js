import {useCallback, useEffect, useState} from 'react';

export const useFetch = (callback) => {
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = useCallback(async (...params) => {
        try {
            setIsLoading(true)
            const data = await callback(...params)
            setIsLoading(false)
            setData(data)
        } catch (e) {
            console.log(e.message)
            setIsError(true)
            setIsLoading(false)
        }
    }, [callback])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return [data, isLoading, isError, fetchData];
};
