import clsx from 'clsx';
import React, {
  useContext, useEffect, useMemo, useRef,
} from 'react';
import { ITabsTabProps } from './Tabs.types';
import styles from './Tabs.module.scss';
import TabsContext from './TabsContext';

const Tab:React.FC<ITabsTabProps> = ({
  className, testingID, tabId, children, title, icon, description, closable, tabRender, ...props
}) => {
  const {
    vertical, activeId, register, unregister, updateProps, registred, getIndex,
  } = useContext(TabsContext);

  const unregisterRef = useRef(() => unregister(tabId));
  const updatePropsRef = useRef(updateProps);
  const registredRef = useRef(registred);
  const registerRef = useRef(register);

  const tabStylePrefix = useMemo(() => `tabs--${vertical ? 'vertical' : 'horizontal'}`, [vertical]);

  useEffect(() => {
    unregisterRef.current = () => unregister(tabId);
    updatePropsRef.current = updateProps;
    registredRef.current = registred;
    registerRef.current = register;
  }, [tabId, unregister, updateProps, registred, register]);

  useEffect(() => {
    const tabProps = {
      description, icon, tabId, title, closable, tabRender,
    };

    if (registredRef.current(tabId)) {
      updatePropsRef.current(tabId, tabProps);
    } else {
      registerRef.current(tabId, tabProps);
    }
  }, [closable, description, icon, tabId, tabRender, title, updateProps]);

  useEffect(() => () => {
    unregisterRef.current();
  }, []);

  if (activeId !== tabId) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  const tabIndex = getIndex(tabId);

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="tabs__tab"
      data-lens-tabs-tab-index={tabIndex}
      className={clsx(
        styles[`${tabStylePrefix}__content`],
        className,
      )}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
};

export default Tab;
