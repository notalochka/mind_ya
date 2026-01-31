import { ComponentType } from 'react';
import InfoPageStep5 from './InfoPageStep5';
import InfoPageStep8 from './InfoPageStep8';
import InfoPageStep9 from './InfoPageStep9';

// Реєстр компонентів інформаційних сторінок
export const infoPageComponents: Record<string, ComponentType<any>> = {
  'info-step-5': InfoPageStep5,
  'info-step-8': InfoPageStep8,
  'info-step-9': InfoPageStep9,
  // Додавайте нові компоненти тут
};

export type InfoPageKey = keyof typeof infoPageComponents;







