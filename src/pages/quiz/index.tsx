import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import { ProgressIndicator } from '@/components/ProgressIndicator/ProgressIndicator';
import { infoPageComponents } from '@/components/QuizInfoPages';
import { quizData } from '@/data/quizData';
import { Step, InfoStep, QuestionStep } from '@/types/quiz';
import styles from './index.module.css';

const Quiz: NextPage = () => {
  const router = useRouter();
  const { step } = router.query;
  
  const currentStepNumber = step ? parseInt(step as string, 10) : 1;
  const currentStep = quizData.steps.find((s: Step) => s.order === currentStepNumber);
  const totalSteps = quizData.steps.length;

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Завантажуємо відповідь, якщо вона вже була дана
  useEffect(() => {
    if (currentStep?.type === 'question' && answers[currentStepNumber]) {
      setSelectedOption(answers[currentStepNumber]);
    } else {
      setSelectedOption(null);
    }
  }, [currentStepNumber, currentStep, answers]);

  const handleNext = () => {
    if (currentStep?.type === 'question' && selectedOption !== null) {
      // Зберігаємо відповідь
      setAnswers(prev => ({ ...prev, [currentStepNumber]: selectedOption }));
      
      // Додаємо крок до завершених
      if (!completedSteps.includes(currentStepNumber)) {
        setCompletedSteps(prev => [...prev, currentStepNumber]);
      }
    } else if (currentStep?.type === 'info') {
      // Для інформаційних сторінок просто відмічаємо як завершену
      if (!completedSteps.includes(currentStepNumber)) {
        setCompletedSteps(prev => [...prev, currentStepNumber]);
      }
    }

    // Переходимо на наступний крок
    if (currentStepNumber < totalSteps) {
      router.push(`/quiz?step=${currentStepNumber + 1}`, undefined, { shallow: true });
    } else {
      // Завершення тесту - можна додати сторінку результатів
      // router.push('/quiz/result');
    }
  };

  const handleBack = () => {
    if (currentStepNumber > 1) {
      router.push(`/quiz?step=${currentStepNumber - 1}`, undefined, { shallow: true });
    } else {
      // Якщо це перший крок, повертаємося на головну
      router.push('/');
    }
  };

  if (!currentStep) {
    return (
      <>
        <Header />
        <main className={styles.quizPage}>
          <div className={styles.quizContainer}>
            <p>Крок не знайдено</p>
          </div>
        </main>
      </>
    );
  }

  // Рендеринг інформаційної сторінки
  const renderInfoStep = (infoStep: InfoStep) => {
    const InfoComponent = infoPageComponents[infoStep.componentKey];
    
    if (!InfoComponent) {
      console.error(`Компонент з ключем "${infoStep.componentKey}" не знайдено`);
      return (
        <div className={styles.infoStep}>
          <p>Помилка: компонент не знайдено</p>
        </div>
      );
    }

    return <InfoComponent {...(infoStep.props || {})} />;
  };

  return (
    <>
      <Head>
        <title>Тест - Крок {currentStepNumber}</title>
      </Head>
      <Header />
      <main className={styles.quizPage}>
        <div className={styles.quizContainer}>
          <ProgressIndicator
            currentStep={currentStepNumber}
            totalSteps={totalSteps}
            completedSteps={completedSteps}
          />

          {currentStep.type === 'question' ? (
            <>
              <h1 className={styles.question}>{currentStep.question}</h1>
              <div className={styles.optionsContainer}>
                {(currentStep as QuestionStep).options.map((option) => (
                  <button
                    key={option.id}
                    className={`${styles.optionCard} ${
                      selectedOption === option.id ? styles.optionCardSelected : ''
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <div className={styles.optionContent}>
                      <div className={styles.optionText}>
                        <p className={styles.optionTitle}>{option.title}</p>
                        {option.subtitle && (
                          <p className={styles.optionSubtitle}>{option.subtitle}</p>
                        )}
                      </div>
                      <div className={styles.optionIndicator}>
                        {selectedOption === option.id ? (
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2" />
                            <path
                              d="M6 10L9 13L14 7"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <div className={styles.optionRadio} />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            renderInfoStep(currentStep)
          )}

          <div className={styles.navigationButtons}>
            <button
              className={styles.backButton}
              onClick={handleBack}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15L7 10L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Назад</span>
            </button>
            <button
              className={styles.nextButton}
              onClick={handleNext}
              disabled={
                currentStep.type === 'question' && selectedOption === null
              }
            >
              <span>Далі</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 5L13 10L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Quiz;
