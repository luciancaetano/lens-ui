import ptBR from './ptBr/index';
import enUs from './enUs/index';

export const DefaultLocales = { ptBR, enUs };
export type LocaleType = typeof enUs;
export type LocaleKeyType = keyof LocaleType;
