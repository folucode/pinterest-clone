import styles from '../styles/Home.module.css';

export default function Pin({ pins }) {
  return (
    <div className={styles.grid}>
      {pins.map((pin) => (
        <div
          className={styles.card}
          style={{
            backgroundImage: `url(${pin.image_url})`,
            borderRadius: '10px',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <a href={pin.destination_link}>
            <h2>{pin.title}</h2>
            <p>{pin.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
