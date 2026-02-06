import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './legal-document.module.css';

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Політика конфіденційності - Mind Я</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <object 
            data="/documents/privacy.pdf#toolbar=1" 
            type="application/pdf"
            className={styles.pdfViewer}
            aria-label="Політика конфіденційності"
          >
            <p>
              Ваш браузер не підтримує відображення PDF. 
              <a href="/documents/privacy.pdf" target="_blank" rel="noopener noreferrer">Завантажити PDF</a>
            </p>
          </object>
        </div>
      </main>
    </>
  );
};

export default Privacy;

