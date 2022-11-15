import styles from '../styles/Home.module.css';
import { getXataClient } from '../src/xata';
import Pin from '../components/Pin';

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Pinterest clone!</h1>

        <p className={styles.description}>
          Get started by creating your{' '}
          <a
            href='/create-pin'
            style={{
             color: 'red',
             fontWeight: 'bolder'
            }}
          >
            pin
          </a>
        </p>
        <Pin pins={data} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const xata = getXataClient();
  const data = await xata.db.pins.getAll();
  return { props: { data } };
}
