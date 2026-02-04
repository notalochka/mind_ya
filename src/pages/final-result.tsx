import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import styles from './final-result.module.css';

const FinalResult: NextPage = () => {
  const router = useRouter();
  const [userAge, setUserAge] = useState<string | null>(null);

  // Завантажуємо збережений вік з localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedAge = localStorage.getItem('mind_ya_user_age');
        if (savedAge) {
          setUserAge(savedAge);
        }
      } catch (error) {
        console.error('Помилка при завантаженні віку користувача:', error);
      }
    }
  }, []);

  const handleContinue = () => {
    router.push('/plan-ready');
  };

  // Форматуємо вік для відображення
  const getAgeText = () => {
    if (!userAge) return 'вашої вікової групи';
    // Якщо вік містить "+", додаємо "років" після, інакше додаємо "років" після діапазону
    return userAge.includes('+') ? `${userAge} років` : `${userAge} років`;
  };

  return (
    <>
      <Head>
        <title>Фінальний результат - Mind Я</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.infoPage}>
            <h1 className={styles.title}>Фінальний результат</h1>
            <h2 className={styles.subtitle}>
              Ви можете <span>знизити рівень тривоги</span> та <span>повернути відчуття контролю</span>
            </h2>

            <div className={styles.chartContainer}>
              <Image
                src="/step-27.jpg"
                alt="Progress chart"
                width={800}
                height={500}
                className={styles.chart}
              />
            </div>
            <p className={styles.chartDisclaimer}>*лише для ілюстрації</p>

            <div className={styles.compatibilitySection}>
              <h3 className={styles.compatibilityTitle}>
                Індекс сумісності: <span className={styles.compatibilityHigh}>Високий</span>
              </h3>

              <div className={styles.scoreContainer}>
                <Image
                  src="/score.jpg"
                  alt="Спідометр сумісності"
                  width={400}
                  height={300}
                  className={styles.scoreImage}
                />
                <div className={styles.scorePercentage}>87.1%</div>
              </div>

              <p className={styles.compatibilityText}>
                <strong>87.1% жінок</strong> вашої вікової групи <strong>({getAgeText()})</strong> відзначають помітні покращення після проходження програми Mind Я
              </p>
              <p className={styles.disclaimer}>*статистика на основі внутрішнього опитування</p>
            </div>

            <button className={styles.continueButton} onClick={handleContinue}>
              Продовжити
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default FinalResult;

