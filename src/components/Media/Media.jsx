import styles from './Media.module.css';
import icon from '../../assets/spinner.svg';

function Media({url, isLoading, isError}) {
    if (isLoading) {
        return (
            <img className={styles.spinner} src={icon} alt=''/>
        );
    }

    if (isError || !url) {
        return (
            <p className={styles.error}>Sorry, we can't loading an image</p>
        );
    }


    return (
        <div className={styles.media}>
            <img className={styles.image} src={url} alt=''/>
        </div>
    );
}

export default Media;