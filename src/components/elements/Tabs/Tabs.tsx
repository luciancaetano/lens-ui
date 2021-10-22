import clsx from 'clsx';
import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { CLASSES } from '../../../css-classes';
import { Container } from './Tabs.styles';
import { ITabsProps } from './Tabs.types';

const Tabs:React.FC<ITabsProps> = ({
  className, testingID, id, children, activeTab, initialActiveTab, onChange, tabs, vertical,
}) => {
  const [activeTabId, setActiveTabId] = useState<string | null>(initialActiveTab || null);

  const activeTabItem = useMemo(() => tabs.find((t) => t.id === activeTabId), [tabs, activeTabId]);

  useEffect(() => {
    if (activeTab !== undefined) {
      setActiveTabId(activeTab);
    }
  }, [activeTab]);

  const handleTabClick = useCallback((id: string, tabClick?: React.MouseEventHandler<HTMLDivElement>) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (onChange) {
      onChange(id, e);
    }
    if (tabClick) {
      tabClick(e);
    }
    if (activeTab === undefined) {
      setActiveTabId(id);
    }
  }, [onChange, activeTab]);

  const tabItems = useMemo(() => tabs.map((tab) => (
    <div
      className={clsx(CLASSES.FontReset, 'lens-ui-tabs-tab-item', { active: activeTabId === tab.id }, tab.className)}
      onClick={handleTabClick(tab.id, tab.onClick)}
      key={tab.id}
      data-bs-toggle="tab"
    >
      {tab.title}
    </div>
  )), [activeTabId, tabs, handleTabClick]);

  return (
    <Container
      id={id}
      data-testid={testingID}
      className={clsx(CLASSES.FontReset, 'lens-ui-tabs', `lens-ui-tabs-style-${vertical ? 'vertical' : 'horizontal'}`, className)}
    >
      <div className="lens-ui-tabs-container">
        {tabItems}
      </div>
      {typeof children === 'function' && (
        <div className={clsx(CLASSES.FontReset, 'lens-ui-tabs-content')}>
          {children(activeTabItem)}
        </div>
      )}
    </Container>
  );
};

export default Tabs;
