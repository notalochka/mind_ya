import React from 'react';
import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  completedSteps,
}) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressLine}>
        <div
          className={styles.progressLineFilled}
          style={{
            width: totalSteps > 1 
              ? `${((currentStep - 1) / (totalSteps - 1)) * 100}%`
              : '0%',
          }}
        />
      </div>
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isCompleted = completedSteps.includes(stepNumber);
        const isCurrent = stepNumber === currentStep;
        const isPast = stepNumber < currentStep;

        return (
          <div
            key={index}
            className={`${styles.progressDot} ${
              isCurrent || isPast ? styles.progressDotActive : ''
            } ${isCompleted ? styles.progressDotCompleted : ''}`}
          >
            {isCompleted && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6L5 9L10 3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};


