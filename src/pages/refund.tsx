import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './legal-document.module.css';

const Refund: NextPage = () => {
  return (
    <>
      <Head>
        <title>Політика повернення - Mind Я</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>   
      <main className={styles.main}>
        <div className={styles.container}>
          <object 
            data="/documents/refund.pdf#toolbar=1" 
            type="application/pdf"
            className={styles.pdfViewer}
            aria-label="Політика повернення"
          >
            <p>
              Ваш браузер не підтримує відображення PDF. 
              <a href="/documents/refund.pdf" target="_blank" rel="noopener noreferrer">Завантажити PDF</a>
            </p>
          </object>
        </div>
      </main>
    </>
  );
};

export default Refund;

