import React from 'react';
import clsx from 'clsx';
import styles from './Loader.module.scss';
import { ILoaderProps } from './Loader.types';
import { CLASSES } from '../../../css-classes';

const Loader: React.FC<ILoaderProps> = ({
  className, testingID, id, children, type = 'eclipse', intent = 'primary', size = 5,
}) => (
  <div
    id={id}
    data-testid={testingID}
    className={clsx(styles.loader, CLASSES.ComponentName('Loader'), className)}
    style={{ width: `${size}rem`, height: `${size}rem` }}
  >
    <div className={styles.loaderContent}>
      {children}
    </div>
    {type === 'oval' && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="var(--loader-width)"
        height="var(--loader-width)"
        stroke={`var(--lens-ui-intents-${intent})`}
        viewBox="-5.8 -5.8 50 50"
      >
        <g
          fill="none"
          fillRule="evenodd"
          strokeWidth="2"
          transform="translate(1 1)"
        >
          <circle cx="18" cy="18" r="18" strokeOpacity="0.5" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              dur="1s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </path>
        </g>
      </svg>
    )}
    {type === 'eclipse' && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto' }}
        width="var(--loader-width)"
        height="var(--loader-width)"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <path fill={`var(--lens-ui-intents-${intent})`} d="M10 50a40 40 0 0080 0 40 42 0 01-80 0">
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 51;360 50 51"
          />
        </path>
      </svg>
    )}
    {type === 'spinner' && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto' }}
        width="var(--loader-width)"
        height="var(--loader-width)"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="20 20 60 60"
      >
        <rect width="6" height="12" x="47" y="24" fill={`var(--lens-ui-intents-${intent})`} rx="3" ry="6">
          <animate
            attributeName="opacity"
            begin="-0.9166666666666666s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(30 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.8333333333333334s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(60 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(90 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.6666666666666666s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(120 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.5833333333333334s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(150 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(180 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.4166666666666667s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(210 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.3333333333333333s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(240 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(270 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.16666666666666666s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(300 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="-0.08333333333333333s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
        <rect
          width="6"
          height="12"
          x="47"
          y="24"
          fill={`var(--lens-ui-intents-${intent})`}
          rx="3"
          ry="6"
          transform="rotate(330 50 50)"
        >
          <animate
            attributeName="opacity"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </rect>
      </svg>
    )}
  </div>
);

export default Loader;
