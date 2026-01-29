import { QuizData } from '@/types/quiz';

export const quizData: QuizData = {
  id: 'mind-ya-quiz',
  title: 'Тест Mind Я',
  steps: [
    {
      id: 'step-1',
      type: 'question',
      order: 1,
      question: 'Скільки вам років?',
      options: [
        { id: 1, title: '20-30' },
        { id: 2, title: '31-40' },
        { id: 3, title: '41-50' },
        { id: 4, title: '50+' },
      ],
    },
    {
      id: 'step-2',
      type: 'question',
      order: 2,
      question: 'Що з цього вас турбує найбільше останнім часом?',
      options: [
        { id: 1, title: 'Постійна внутрішня напруга' },
        { id: 2, title: 'Проблеми зі сном' },
        { id: 3, title: 'Емоційні зриви' },
      ],
    },
    // Тут можна додати інформаційні сторінки та інші питання
  ],
};


