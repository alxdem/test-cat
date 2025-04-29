import Form from './components/Form/Form';
import Media from './components/Media/Media';
import usePhoto from './hooks/usePhoto.js';
import {useEffect, useRef, useState} from 'react';
import { checkboxes } from './assets/mock';

function App() {
    const TIMER = 5000;
    const [isAuto, setIsAuto] = useState(false);
    const {
        imageUrl,
        isLoading,
        isError,
        getPhoto,
    } = usePhoto();

    let timerId = useRef(null);

    const onGetPhoto = () => {
        if (timerId.current) {
            clearInterval(timerId.current);
        }
        getPhoto();
    };

    useEffect(() => {
        if (!isAuto) return;

        timerId.current = setInterval(() => {
            getPhoto();
        }, TIMER);

        return () => clearInterval(timerId.current);
    }, [isAuto, timerId.current]);

    return (
        <section className='main'>
            <Form
                checkboxes={checkboxes}
                btnText='Get cat'
                getPhoto={onGetPhoto}
                setAuto={setIsAuto}
            />
            <Media
                url={imageUrl}
                isLoading={isLoading}
                isError={isError}
            />
        </section>
    )
}

export default App
