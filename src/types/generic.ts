export const IntentEnum = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
};

export type IntentType = keyof typeof IntentEnum | null;

export const AdvancedIntentEnum = {
  ...IntentEnum,
  light: 'light',
  dark: 'dark',
};

export type AdvancedIntentType = keyof typeof AdvancedIntentEnum;

export type UserScriptStateType = 'loading' | 'idle' | 'ready' | 'error';
