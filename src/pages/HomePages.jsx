import { Helmet } from 'react-helmet';
import styles from './HomePages.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title className={styles.title}>Home Pages</title>
      </Helmet>
      <p className={styles.appHomeContent}>
        Welcome to the phonebook page. Please select
        <span className={styles.colorLight}> --Sing up-- </span> or
        <span className={styles.colorLight}> --Sing in </span>.
      </p>
    </div>
  );
}
