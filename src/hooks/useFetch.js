import axios from "axios";
import { useState, useRef, useEffect } from "react";

const useFetch = (url, options, cacheTime = 0) => {
    const cache = useRef({});
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const cacheExpireTime = Date.now() - cache.current[url]?.timeStamp;

            if (cache.current[url] && cacheExpireTime < cacheTime) {
                setData(cache.current[url].data);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(process.env.REACT_APP_API_URL, options);
                setData(response.data);
                cache.current[url] = { data: response.data, timeStamp: Date.now() };
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [url, options, cacheTime]);

    return { data, loading, error };
};

export default useFetch;