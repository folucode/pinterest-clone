import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [imageSrc, setImageSrc] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [destination_link, setDestinationLink] = useState();

  async function handleOnSubmit(event) {
    event.preventDefault();

    let response;

    if (imageSrc) {
      const body = new FormData();
      body.append('upload_preset', 'bn1pyehj');

      body.append('file', imageSrc);

      response = await fetch(
        'https://api.cloudinary.com/v1_1/chukwutosin/image/upload',
        {
          method: 'POST',
          body,
        }
      ).then((r) => r.json());
    }

    fetch('/api/create-pin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        destination_link,
        image_url: response.secure_url,
      }),
    }).then((r) => alert('record added successfully'));
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Pinterest clone!</h1>

        <p className={styles.description}>
          <a
            href='/'
            style={{
              color: 'red',
              fontWeight: 'bolder',
            }}
          >
            Home
          </a>
          <br />
          create your pin
        </p>

        <div className={styles.form}>
          <label htmlFor='title'>
            <b>Title:</b>
          </label>
          <input
            type='text'
            className={styles.formInput}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='description'>
            <b>Description:</b>
          </label>
          <input
            type='text'
            className={styles.formInput}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor='destination link'>
            <b>Destination Link:</b>
          </label>
          <input
            type='text'
            className={styles.formInput}
            onChange={(e) => setDestinationLink(e.target.value)}
          />
          <label htmlFor='image'>
            <b>Image:</b>
          </label>
          <input
            type='file'
            className={styles.formInput}
            onChange={(e) => setImageSrc(e.target.files[0])}
          />
          <button
            onClick={handleOnSubmit}
            type='submit'
            className={styles.submitInput}
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}
