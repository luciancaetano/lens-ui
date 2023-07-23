export const Intents = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
};

export type IntentType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

export const AdvancedIntent = {
  ...Intents,
  light: 'light',
  dark: 'dark',
};

export type AdvancedIntentType = keyof typeof AdvancedIntent;

export type UserScriptStateType = 'loading' | 'idle' | 'ready' | 'error';
