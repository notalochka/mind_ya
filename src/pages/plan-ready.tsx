import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import styles from './plan-ready.module.css';

interface ImprovementItem {
  icon: React.ReactNode;
  text: string;
}

const improvements: ImprovementItem[] = [
    {
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#5671A6"/>
        <path d="M12 4C11.45 4 11 4.45 11 5V7C11 7.55 11.45 8 12 8C12.55 8 13 7.55 13 7V5C13 4.45 12.55 4 12 4Z" fill="#5671A6"/>
        <path d="M8 10C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12C8.55 12 9 11.55 9 11C9 10.45 8.55 10 8 10Z" fill="#5671A6"/>
        <path d="M16 10C15.45 10 15 10.45 15 11C15 11.55 15.45 12 16 12C16.55 12 17 11.55 17 11C17 10.45 16.55 10 16 10Z" fill="#5671A6"/>
        <path d="M12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14Z" fill="#5671A6"/>
        </svg>
    ),
    text: 'Рівень тривоги'
    },
    {
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12V22L22 10H13V2Z" fill="#5671A6"/>
        </svg>
    ),
    text: 'Відчуття контролю'
    },
   {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#5671A6"/>
      </svg>
    ),
    text: 'Стосунки з близькими'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#5671A6"/>
        <path d="M12 6C11.45 6 11 6.45 11 7V12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12V7C13 6.45 12.55 6 12 6Z" fill="#5671A6"/>
        <circle cx="12" cy="16" r="1" fill="#5671A6"/>
        <circle cx="6" cy="8" r="0.8" fill="#5671A6"/>
        <circle cx="18" cy="8" r="0.8" fill="#5671A6"/>
        <circle cx="8" cy="6" r="0.6" fill="#5671A6"/>
        <circle cx="16" cy="6" r="0.6" fill="#5671A6"/>
      </svg>
    ),
    text: 'Якість сну'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#5671A6"/>
      </svg>
    ),
    text: 'Впевненість у собі'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#5671A6"/>
        <path d="M2 17L12 22L22 17" stroke="#5671A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#5671A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Стійкість до стресу'
  },
];

const PlanReady: NextPage = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({ minutes: 10, seconds: 0 });

  // Таймер знижки
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (minutes: number, seconds: number) => {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Обчислюємо дату +14 днів
  const getTargetDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date.toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' });
  };

  const handleGetPlan = () => {
    // Тут можна додати логіку переходу на наступну сторінку
    router.push('/welcome');
  };

  return (
    <>
      <Head>
        <title>Ваш персональний план готовий! - Mind Я</title>
      </Head>
      
      {/* Sticky Header */}
      <div className={styles.stickyHeader}>
        <div className={styles.stickyContent}>
          <div className={styles.discountText}>
            🔥 Знижка 50% закінчується через: <span className={styles.timer}>{formatTime(timeLeft.minutes, timeLeft.seconds)}</span>
          </div>
          <button className={styles.getPlanButton} onClick={handleGetPlan}>
            Отримати план
          </button>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Ваш персональний план готовий!</h1>
          
          <div className={styles.imageContainer}>
            <Image
              src="/beforeafter.jpg"
              alt="До і після"
              width={800}
              height={600}
              className={styles.beforeAfterImage}
              priority
            />
          </div>

          <h2 className={styles.improvementsTitle}>
             Сфери покращення
          </h2>
          <ul className={styles.improvementsList}>
            {improvements.map((item, index) => (
              <li key={index} className={styles.improvementItem}>
                <div className={styles.iconContainer}>
                  {item.icon}
                </div>
                <div className={styles.textAndArrow}>
                  <span className={styles.improvementText}>{item.text}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`${styles.arrow} ${index === 0 ? styles.arrowDown : ''}`}
                  >
                    <path
                      d="M7.5 3L15 12.5976H0L7.5 3Z"
                      fill={`url(#paint0_linear_${index})`}
                    />
                    <defs>
                      <linearGradient
                        id={`paint0_linear_${index}`}
                        x1="7.5"
                        y1="3"
                        x2="7.5"
                        y2="12.5976"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.395833" stopColor="#53CC58" />
                        <stop offset="1" stopColor="#429746" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.expectationSection}>
            <h3 className={styles.expectationTitle}>Коли очікувати покращення</h3>
            <h4 className={styles.expectationSubtitle}>
              На основі ваших відповідей ви можете досягти помітних результатів
            </h4>
            <div className={styles.dateContainer}>
              <p className={styles.date}>до {getTargetDate()}</p>
              <div className={styles.badge}>
                <span>34% швидше</span>
              </div>
            </div>
            
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
          </div>
        </div>
      </main>
    </>
  );
};

export default PlanReady;

