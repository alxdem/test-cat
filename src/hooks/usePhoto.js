import {useEffect, useState} from 'react';

function usePhoto() {
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getPhoto = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('https://api.thecatapi.com/v1/images/search', {
                headers: {
                    'x-api-key': import.meta.env.VITE_API_KEY,
                }
            });
            const info = await res.json();
            const url = await info[0]?.url;

            if (!url) {
                return;
            }

            setImageUrl(url);
        } catch (err) {
            setIsError(true);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getPhoto();
    }, []);

    return {imageUrl, isLoading, isError, getPhoto};
}

export default usePhoto;