import clsx from 'clsx';
import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import isEqual from 'lodash/isEqual';
import { useTheme } from '../../../hooks';
import styles from './Tabs.module.scss';
import { IBaseTabProps, ITabsProps } from './Tabs.types';
import TabsContext, { ITabsContextType } from './TabsContext';
import Icon from '../Icon/Icon';

/**
 * The Tabs component make easy to explore and switch between different views.
 */
const Tabs = React.forwardRef<HTMLDivElement, ITabsProps>(({
  className, testingID, id, children, activeTab, initialActiveTab, onChange, tabBarExtraContentLeft, tabBarExtraContentRight, onTabClose, vertical, ...props
}, ref) => {
  const [theme] = useTheme();

  const [tabs, setTabs] = useState<Array<IBaseTabProps>>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(initialActiveTab || null);

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
        activeTabId === tab.tabId && 'lens-ui-active-tab',
        activeTabId === tab.tabId && styles[`${tabStylePrefix}__container__tab-item--active`],
        tab.icon && styles[`${tabStylePrefix}__container__tab-item--with-left-icon`],
        tab.closable && styles[`${tabStylePrefix}__container__tab-item--with-right-icon`],
      )}
      onClick={handleTabClick(tab.tabId)}
      key={tab.tabId}
      data-bs-toggle="tab"
      data-lens-element="tabs__tab"
    >
      {typeof tab.tabRender === 'function' && tab.tabRender(tab)}
      {typeof tab.tabRender !== 'function' && (
        <>
          <div className={clsx(styles[`${tabStylePrefix}__container__tab-item__title-holder`], activeTabId === tab.tabId && styles[`${tabStylePrefix}__container__tab-item__title-holder--active`])}>
            {tab.icon && <div className={clsx(styles[`${tabStylePrefix}__container__tab-item__icon`], activeTabId === tab.tabId && styles[`${tabStylePrefix}__container__tab-item__icon--active`])}>{tab.icon}</div>}
            <div className={clsx(styles[`${tabStylePrefix}__container__tab-item__content`], activeTabId === tab.tabId && styles[`${tabStylePrefix}__container__tab-item__content--active`])}>{tab.title}</div>
            {tab.closable && <div className={clsx(styles[`${tabStylePrefix}__container__tab-item__close`], activeTabId === tab.tabId && styles[`${tabStylePrefix}__container__tab-item__close--active`])}>{tab.closeIcon ? tab.closeIcon : <Icon name="MdClose" />}</div>}
          </div>
          {tab.description && <div className={clsx(styles[`${tabStylePrefix}__container__tab-item__description`], activeTabId === tab.tabId && styles[`${tabStylePrefix}__container__tab-item__description--active`])}>{tab.description}</div>}
        </>
      )}
    </div>
  )), [tabs, tabStylePrefix, activeTabId, handleTabClick]);

  const register = useCallback((tabId: string, props: IBaseTabProps) => {
    if (tabs.findIndex((t) => t.tabId === tabId) !== -1) return;

    setTabs((t) => [...t, props]);
  }, [tabs]);

  const unregister = useCallback((tabId: string) => {
    if (tabs.findIndex((t) => t.tabId === tabId) !== -1) return;

    setTabs((t) => t.filter((t) => t.tabId !== tabId));
  }, [tabs]);

  const updateProps = useCallback((tabId: string, props: IBaseTabProps) => {
    const tabIndex = tabs.findIndex((t) => t.tabId === tabId);

    if (tabIndex !== -1) {
      if (isEqual(props, tabs[tabIndex])) return;

      const updatedTabs = tabs.slice();

      updatedTabs[tabIndex] = props;
      setTabs(updatedTabs);
    }
  }, [tabs]);

  const registred = useCallback((tabId: string) => tabs.findIndex((tab) => tab.tabId !== tabId) !== -1, [tabs]);

  const getIndex = useCallback((tabId: string) => tabs.findIndex((t) => t.tabId === tabId), [tabs]);

  const providerValue = useMemo<ITabsContextType>(() => ({
    activeId: activeTabId,
    register,
    registred,
    unregister,
    updateProps,
    vertical,
    onTabClose,
    getIndex,
  }), [activeTabId, getIndex, onTabClose, register, registred, unregister, updateProps, vertical]);

  return (
    <div
      {...props}
      id={id}
      data-lens-element="tabs"
      data-lens-tabs-orientation={tabStylePrefix}
      data-testid={testingID}
      className={clsx(styles.tabs, styles[`${tabStylePrefix}`], theme, className)}
      ref={ref}
    >
      <div className={clsx(styles.tabsHolder, vertical && styles.tabsHolderVertical)} data-lens-element="tabs__holder">
        {!vertical && tabBarExtraContentLeft && <div data-lens-element="tabs__holder__extra-content-left" className={clsx(styles.tabsTabBarExtraContent, styles.tabsTabBarExtraContentLeft)}>{tabBarExtraContentLeft}</div>}
        <div className={styles[`${tabStylePrefix}__container`]} data-lens-element="tabs__holder__content">
          {tabItems}
        </div>
        {!vertical && tabBarExtraContentRight && <div data-lens-element="tabs__holder__extra-content-right" className={clsx(styles.tabsTabBarExtraContent, styles.tabsTabBarExtraContentRight)}>{tabBarExtraContentRight}</div>}
      </div>
      <TabsContext.Provider value={providerValue}>
        {children}
      </TabsContext.Provider>
    </div>
  );
});

export default Tabs;
