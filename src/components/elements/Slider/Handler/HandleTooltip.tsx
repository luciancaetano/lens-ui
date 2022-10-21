import React from 'react';
import 'rc-tooltip/assets/bootstrap.css';
import raf from 'rc-util/lib/raf';
import Tooltip from 'rc-tooltip';

export interface IHandleTooltipProps {
  value: number;
  visible: boolean;
  children: React.ReactNode;
  tipFormatter?: (value: number) => React.ReactNode;
  handle?: (value: number) => React.ReactNode;
}

const HandleTooltip: React.FC<IHandleTooltipProps> = ({
  value, children, visible, tipFormatter, ...restProps
}) => {
  const tooltipRef = React.useRef<any>();
  const rafRef = React.useRef<number | null>(null);

  function cancelKeepAlign() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    raf.cancel(rafRef.current!);
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      tooltipRef.current?.forcePopupAlign();
    });
  }

  React.useEffect(() => {
    if (tipFormatter) {
      if (visible) {
        keepAlign();
      } else {
        cancelKeepAlign();
      }
    }

    return () => {
      if (tipFormatter) {
        cancelKeepAlign();
      }
    };
  }, [tipFormatter, value, visible]);

  if (!tipFormatter) {
    return children as unknown as React.ReactElement;
  }

  return (
    <Tooltip
      placement="top"
      overlay={tipFormatter(Number(value))}
      overlayInnerStyle={{ minHeight: 'auto' }}
      ref={tooltipRef}
      visible={visible}
      {...restProps}
    >
      {children as unknown as React.ReactElement}
    </Tooltip>
  );
};

export default HandleTooltip;
