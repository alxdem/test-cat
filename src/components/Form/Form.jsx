import Checkbox from '../Checkbox/Checkbox.jsx';
import Button from '../Button/Button.jsx';
import { useState } from 'react';
import styles from './Form.module.css';

function Form({checkboxes, btnText, isLoading, getPhoto, setAuto}) {
    const [isBtnEnabled, setIsBtnEnabled] = useState(false);

    const changePhoto = (e) => {
        e.preventDefault();
        getPhoto && getPhoto();
    };

    const checkboxChange = (e) => {
        const {checked, name} = e.target;

        switch (name) {
            case 'enabled':
                setIsBtnEnabled(checked);
                break;
            case 'refresh':
                setAuto(checked);
                break;
            default:
                console.warn('Такой идентификатор не найден');
        }
    };

    return (
        <form className={styles.form}>
            <fieldset className={styles.fieldset}>
                {checkboxes.map(checkbox => (
                    <Checkbox
                        key={checkbox.value}
                        text={checkbox.text}
                        value={checkbox.value}
                        name={checkbox.name}
                        onChange={checkboxChange}
                    />
                ))}
            </fieldset>
            <Button
                text={btnText}
                onClick={changePhoto}
                disabled={!isBtnEnabled || isLoading}
            />
        </form>
    );
}

export default Form;