import styles from './HomePages.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to the phonebook page. Please select Register or Login.
      </h1>
    </div>
  );
}
