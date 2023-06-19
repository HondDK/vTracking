import {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';

export interface FetchDataResponse<T> {
    data: T | null;
    loading: boolean;

}

const useFetchData = <T>(url: string): FetchDataResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<T> = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (err) {

                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {data, loading};
};

export default useFetchData;
