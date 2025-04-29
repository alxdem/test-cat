import styles from './Checkbox.module.css';
function Checkbox({name, text, value, onChange}) {
    return (
        <label className={styles.checkbox}>
            <input
                className={styles.input}
                name={name}
                value={value}
                type='checkbox'
                onChange={onChange}
            />
            <span className={styles.text}>{text}</span>
        </label>
    );
}

export default Checkbox;