import { ComponentType } from 'react';
// Імпортуємо інформаційні сторінки
// import InfoPage1 from './InfoPage1';
// import InfoPage2 from './InfoPage2';

// Реєстр компонентів інформаційних сторінок
export const infoPageComponents: Record<string, ComponentType<any>> = {
  // 'info-intro': InfoPage1,
  // 'info-results-explanation': InfoPage2,
  // Додавайте нові компоненти тут
};

export type InfoPageKey = keyof typeof infoPageComponents;



