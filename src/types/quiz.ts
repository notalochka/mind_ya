import { ComponentType } from 'react';

export type StepType = 'question' | 'info';

export interface QuizStep {
  id: string;
  type: StepType;
  order: number;
}

export interface QuestionStep extends QuizStep {
  type: 'question';
  question: string;
  options: {
    id: number;
    title: string;
    subtitle?: string;
  }[];
}

export interface InfoStep extends QuizStep {
  type: 'info';
  componentKey: string;
  props?: Record<string, any>;
}

export type Step = QuestionStep | InfoStep;

export interface QuizData {
  id: string;
  title: string;
  steps: Step[];
}




