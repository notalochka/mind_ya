import { QuizData } from '@/types/quiz';

export const quizData: QuizData = {
  id: 'mind-ya-quiz',
  title: 'Тест Mind Я',
  steps: [
    
    {
      id: 'step-1',
      type: 'question',
      order: 1,
      question: 'Що з цього вас турбує найбільше останнім часом?',
      options: [
        { id: 1, title: 'Постійна внутрішня напруга' },
        { id: 2, title: 'Проблеми зі сном' },
        { id: 3, title: 'Емоційні зриви' },
      ],
    },
    {
      id: 'step-2',
      type: 'question',
      order: 2,
      question: 'Як часто це дає про себе знати у вашому житті?',
      options: [
        { id: 1, title: 'Майже постійно' },
        { id: 2, title: 'Кілька разів на тиждень' },
        { id: 3, title: 'Час від часу' },
        { id: 4, title: 'Рідко' },
      ],
    },
    {
      id: 'step-3',
      type: 'question',
      order: 3,
      question: 'Наскільки це заважає вам у повсякденному житті?',
      options: [
        { id: 1, title: 'Майже не заважає' },
        { id: 2, title: 'Іноді заважає' },
        { id: 3, title: 'Часто заважає' },
        { id: 4, title: 'Заважає постійно' },
      ],
    },
    {
      id: 'step-4',
      type: 'question',
      order: 4,
      question: 'Наскільки легко вам зараз відновлюватися після напруги?',
      options: [
        { id: 1, title: 'Потрібен час, але виходить' },
        { id: 2, title: 'Відновлюватися складно' },
        { id: 3, title: 'Майже не вдається' },
      ],
    },
    {
      id: 'step-5',
      type: 'info',
      order: 5,
      componentKey: 'info-step-5',
      theme: 'primary',
      props: {
        title: 'Навіть без загрози тіло залишається напруженим',
        text: 'Тіло звикає жити в готовності і не перемикається в спокій одразу.',
        gifPath: '/step-5.gif',
      },
    },
    {
      id: 'step-6',
      type: 'rating',
      order: 6,
      question: 'Наскільки часто ви використовуєте їжу, алкоголь або серіали, щоб відволіктись від стресу?',
      minLabel: 'Майже ніколи',
      maxLabel: 'Постійно',
      minValue: 1,
      maxValue: 5,
    },
    {
      id: 'step-7',
      type: 'rating',
      order: 7,
      question: 'Як часто ви відчуваєте, що через напругу стаєте більш дратівливими з близькими?',
      minLabel: 'Майже ніколи',
      maxLabel: 'Постійно',
      minValue: 1,
      maxValue: 5,
    },
    {
      id: 'step-8',
      type: 'info',
      order: 8,
      componentKey: 'info-step-8',
      theme: 'primary',
      props: {
        badgeText: 'ДОСЛІДЖЕННЯ',
        text: 'Люди, які приділяють 10 хвилин на день ментальному здоров\'ю, у 2 рази краще справляються зі стресовими ситуаціями',
        chartImage: '/step-8_1.jpg',
        sourceText: 'Harvard T.H. Chan School of Public HealthJournal of Positive Psychology, 2023',
        sourceIcon: '/step-8_2.png',
      },
    },
    {
      id: 'step-9',
      type: 'info',
      order: 9,
      componentKey: 'info-step-9',
      theme: 'primary',
      props: {
        badgeText: 'ОПИТУВАННЯ КОРИСТУВАЧІВ',
        text: '8 з 10 жінок відчули покращення вже після першого тижня програми.',
        imagePath: '/step-9.jpg',
        rating: 5,
        userName: 'Марина_Харків',
        testimonialTitle: 'Це моя точка опори',
        testimonialText: 'Коли по 3 дні без світла, коли на роботі скорочення, коли постійно тривоги — здавалось, що я просто розвалюсь. Почала робити вправи щовечора при свічках. За два тижні нарешті перестала зриватись на дітей і почала нормально спати.',
      },
    },
    {
      id: 'step-10',
      type: 'rating',
      order: 10,
      question: 'Наскільки ви відчуваєте контроль над своїм життям зараз?',
      minLabel: 'Зовсім не відчуваю',
      maxLabel: 'Повністю контролюю',
      minValue: 1,
      maxValue: 5,
    },
    {
      id: 'step-11',
      type: 'rating',
      order: 11,
      question: 'Як часто ви хвилюєтесь через те, що буде далі?',
      minLabel: 'Ніколи',
      maxLabel: 'Постійно',
      minValue: 1,
      maxValue: 5,
    },
    {
      id: 'step-12',
      type: 'rating',
      order: 12,
      question: 'Наскільки стрес впливає на ваші стосунки з близькими?',
      minLabel: 'Не впливає',
      maxLabel: 'Сильно впливає',
      minValue: 1,
      maxValue: 5,
    },
    {
      id: 'step-13',
      type: 'question',
      order: 13,
      question: 'Чи відчуваєте ви, що через постійну напругу стали гірше про себе думати?',
      options: [
        { id: 1, title: 'Так' },
        { id: 2, title: 'Ні' },
        { id: 3, title: 'Не хочу відповідати' },
      ],
    },
  ],
};







