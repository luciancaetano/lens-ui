import { createGlobalStyle } from 'styled-components';

const genIntentClass = (intent: string, className: string) => `
  .${className} {
    color: var(--lens-ui-intents-${intent}-text);
    border-color: var(--lens-ui-intents-${intent}-border);
    background-color: var(--lens-ui-intents-${intent});
  }
`;

export const PORTAL_ROOT_ID = 'lens-ui-portal-modal-root';

export const CLASSES = {
  NoSelect: 'lens-ui-no-select',

  FontReset: 'lens-ui-font-definition',

  ComponentName: (name: string) => `lensUi__${name}`,

  Table: 'lens-ui-table',

  IntentPrimary: 'lens-ui-intent-primary',
  IntentSecondary: 'lens-ui-intent-secondary',
  IntentSuccess: 'lens-ui-intent-success',
  IntentDanger: 'lens-ui-intent-danger',
  IntentInfo: 'lens-ui-intent-info',
  IntentWarning: 'lens-ui-intent-warning',

  IntentPrimaryLight: 'lens-ui-intent-primary-light',
  IntentSecondaryLight: 'lens-ui-intent-secondary-light',
  IntentSuccessLight: 'lens-ui-intent-success-light',
  IntentDangerLight: 'lens-ui-intent-danger-light',
  IntentInfoLight: 'lens-ui-intent-info-light',
  IntentWarningLight: 'lens-ui-intent-warning-light',

  IntentPrimaryLighten: 'lens-ui-intent-primary-lighten',
  IntentSecondaryLighten: 'lens-ui-intent-secondary-lighten',
  IntentSuccessLighten: 'lens-ui-intent-success-lighten',
  IntentDangerLighten: 'lens-ui-intent-danger-lighten',
  IntentInfoLighten: 'lens-ui-intent-info-lighten',
  IntentWarningLighten: 'lens-ui-intent-warning-lighten',

  IntentPrimaryDark: 'lens-ui-intent-primary-dark',
  IntentSecondaryDark: 'lens-ui-intent-secondary-dark',
  IntentSuccessDark: 'lens-ui-intent-success-dark',
  IntentDangerDark: 'lens-ui-intent-danger-dark',
  IntentInfoDark: 'lens-ui-intent-info-dark',
  IntentWarningDark: 'lens-ui-intent-warning-dark',

  IntentPrimaryDarken: 'lens-ui-intent-primary-darken',
  IntentSecondaryDarken: 'lens-ui-intent-secondary-darken',
  IntentSuccessDarken: 'lens-ui-intent-success-darken',
  IntentDangerDarken: 'lens-ui-intent-danger-darken',
  IntentInfoDarken: 'lens-ui-intent-info-darken',
  IntentWarningDarken: 'lens-ui-intent-warning-darken',
};

export const ANIMATIONS = {
  AnimFadeIn: 'lens-ui-anim-fade-in',
};

export const TableClasses = createGlobalStyle`
  ${genIntentClass('primary', CLASSES.IntentPrimary)}
  ${genIntentClass('secondary', CLASSES.IntentSecondary)}
  ${genIntentClass('success', CLASSES.IntentSuccess)}
  ${genIntentClass('danger', CLASSES.IntentDanger)}
  ${genIntentClass('info', CLASSES.IntentInfo)}
  ${genIntentClass('warning', CLASSES.IntentWarning)}

  ${genIntentClass('primary-light', CLASSES.IntentPrimaryLight)}
  ${genIntentClass('secondary-light', CLASSES.IntentSecondaryLight)}
  ${genIntentClass('success-light', CLASSES.IntentSuccessLight)}
  ${genIntentClass('danger-light', CLASSES.IntentDangerLight)}
  ${genIntentClass('info-light', CLASSES.IntentInfoLight)}
  ${genIntentClass('warning-light', CLASSES.IntentWarningLight)}

  ${genIntentClass('primary-lighten', CLASSES.IntentPrimaryLighten)}
  ${genIntentClass('secondary-lighten', CLASSES.IntentSecondaryLighten)}
  ${genIntentClass('success-lighten', CLASSES.IntentSuccessLighten)}
  ${genIntentClass('danger-lighten', CLASSES.IntentDangerLighten)}
  ${genIntentClass('info-lighten', CLASSES.IntentInfoLighten)}
  ${genIntentClass('warning-lighten', CLASSES.IntentWarningLighten)}

  ${genIntentClass('primary-dark', CLASSES.IntentPrimaryDark)}
  ${genIntentClass('secondary-dark', CLASSES.IntentSecondaryDark)}
  ${genIntentClass('success-dark', CLASSES.IntentSuccessDark)}
  ${genIntentClass('danger-dark', CLASSES.IntentDangerDark)}
  ${genIntentClass('info-dark', CLASSES.IntentInfoDark)}
  ${genIntentClass('warning-dark', CLASSES.IntentWarningDark)}

  ${genIntentClass('primary-darken', CLASSES.IntentPrimaryDarken)}
  ${genIntentClass('secondary-darken', CLASSES.IntentSecondaryDarken)}
  ${genIntentClass('success-darken', CLASSES.IntentSuccessDarken)}
  ${genIntentClass('danger-darken', CLASSES.IntentDangerDarken)}
  ${genIntentClass('info-darken', CLASSES.IntentInfoDarken)}
  ${genIntentClass('warning-darken', CLASSES.IntentWarningDarken)}
`;

export const GlobalClasses = createGlobalStyle`

  @keyframes ${ANIMATIONS.AnimFadeIn} {

    0.0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .${CLASSES.NoSelect} {
    user-select: none ;
  }

  .${CLASSES.Table} {
    caption-side: bottom;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
    color: var(--lens-ui-typography-text-color);
    vertical-align: top;
    border-color: var(--lens-ui-table-border-color);
    cursor: default;

    tbody,
    td,
    tfoot,
    th,
    thead,
    tr {
      /** Font Reset */
      font-family: var(--lens-ui-typography-font-family);
      font-size: var(--lens-ui-typography-font-size);
      font-style: normal;
      letter-spacing: 0;
      text-align: left;
      text-decoration: none;
      text-indent: 0;
      text-shadow: none;
      text-transform: none;
      font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /** !Font Reset */
      border-color: inherit;
      border-style: solid;
      border-width: 0;
    }

    thead {
      display: table-header-group;
    }

    th {
      font-weight: 600;
    }

    &>:not(:last-child)>:last-child>* {
      border-bottom-color: var(--lens-ui-table-border-color);
    }

    &>:not(:last-child)>:last-child>* {
      border-bottom-color: var(--lens-ui-table-border-color);
    }

    &>:not(caption)>*>* {
      border-bottom-width: 0;
      border-top-width: 1px;
    }

    &>:not(caption)>*>* {
      padding: .75rem .75rem;
      border-bottom-width: 1px;
      box-shadow: inset 0 0 0 9999px var(--lens-ui-table-accent-bg);
    }

    &>tbody>tr:hover {
      background-color: var(--lens-ui-table-hover-bg);
    }
  }
`;
