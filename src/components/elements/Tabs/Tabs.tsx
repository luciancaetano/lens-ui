import clsx from 'clsx';
import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import styles from './Tabs.module.scss';
import { ITabsProps } from './Tabs.types';

/**
 * The Tabs component make easy to explore and switch between different views.
 */
const Tabs:React.FC<ITabsProps> = ({
  className, testingID, id, children, activeTab, initialActiveTab, onChange, tabs, vertical, ...props
}) => {
  const [activeTabId, setActiveTabId] = useState<string | null>(initialActiveTab || null);

  const activeTabItem = useMemo(() => tabs.find((t) => t.id === activeTabId), [tabs, activeTabId]);

  const tabStylePrefix = useMemo(() => `tabs--${vertical ? 'vertical' : 'horizontal'}`, [vertical]);

  useEffect(() => {
    if (activeTab !== undefined) {
      setActiveTabId(activeTab);
    }
  }, [activeTab]);

  const handleTabClick = useCallback((id: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (onChange) {
      onChange(id, e);
    }
    if (activeTab === undefined) {
      setActiveTabId(id);
    }
  }, [onChange, activeTab]);

  const tabItems = useMemo(() => tabs.map((tab) => (
    <div
      className={clsx(
        styles[`${tabStylePrefix}__container__tab-item`],
        activeTabId === tab.id && 'lens-ui-active-tab',
        activeTabId === tab.id && styles[`${tabStylePrefix}__container__tab-item--active`],
        tab.className,
      )}
      onClick={handleTabClick(tab.id)}
      key={tab.id}
      data-bs-toggle="tab"
      data-lens-element="tabs__tab"
    >
      {tab.title}
    </div>
  )), [activeTabId, tabs, handleTabClick, tabStylePrefix]);

  return (
    <div
      {...props}
      id={id}
      data-lens-element="tabs"
      data-lens-tabs-orientation={tabStylePrefix}
      data-testid={testingID}
      className={clsx(styles.tabs, styles[`${tabStylePrefix}`], className)}
    >
      <div className={styles[`${tabStylePrefix}__container`]}>
        {tabItems}
      </div>
      {typeof children === 'function' && (
        <div className={styles[`${tabStylePrefix}__content`]}>
          {children(activeTabItem)}
        </div>
      )}
    </div>
  );
};

export default Tabs;
