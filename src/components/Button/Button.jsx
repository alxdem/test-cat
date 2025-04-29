import styles from './Button.module.css';

function Button({text, onClick, type = 'button', ...attributes}) {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
            {...attributes}
        >
            {text}
        </button>
    );
}

export default Button;