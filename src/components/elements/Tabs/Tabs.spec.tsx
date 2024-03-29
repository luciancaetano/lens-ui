import React, { useState } from 'react';

import {
  fireEvent, render, renderHook, act,
} from '@testing-library/react';

import Tabs from './Tabs';
import { ITabsItem } from './Tabs.types';

const tabs:ITabsItem[] = [
  {
    id: '1',
    title: 'Tab1',
  },
  {
    id: '2',
    title: 'Tab2',
  },
  {
    id: '3',
    title: 'Tab3',
  },
];

const tabsRenderer = (activeTab: ITabsItem | null | undefined): React.ReactNode | React.ReactNode[] => (
  <div>{`${activeTab?.title}_content`}</div>
);

describe('<Tabs/>', () => {
  it('render <Tabs/>', async () => {
    const { getByText } = render(
      <Tabs tabs={tabs}>
        {tabsRenderer}
      </Tabs>,
    );

    tabs.forEach((tab) => {
      expect(getByText(tab.title as string)).toBeInTheDocument();
    });
  });

  it('test <Tabs/> rendering change', async () => {
    const { getByText } = render(
      <Tabs tabs={tabs}>
        {tabsRenderer}
      </Tabs>,
    );

    tabs.forEach((tab) => {
      fireEvent.click(getByText(tab.title as string));
      expect(getByText(`${tab.title}_content`)).toBeInTheDocument();
    });
  });

  it('test <Tabs/> controlled', async () => {
    const hook = renderHook(() => useState('1'));

    const onChange = (id: string) => {
      act(() => {
        hook.result.current[1](id);
      });
    };

    const { getByText, rerender } = render(
      <Tabs tabs={tabs} activeTab={hook.result.current[0]} onChange={onChange}>
        {tabsRenderer}
      </Tabs>,
    );

    tabs.forEach((tab) => {
      fireEvent.click(getByText(`${tab.title}`));
      expect(getByText(`${tab.title}`)).toBeInTheDocument();
      expect(hook.result.current[0]).toBe(tab.id);
    });

    act(() => {
      hook.result.current[1]('3');
    });

    rerender(
      <Tabs tabs={tabs} activeTab={hook.result.current[0]} onChange={onChange}>
        {tabsRenderer}
      </Tabs>,
    );

    expect(getByText(`${tabs[2].title}_content`)).toBeInTheDocument();
  });

  it('test <Tabs/> run tabClick event', async () => {
    const { getByText } = render(
      <Tabs tabs={tabs}>
        {tabsRenderer}
      </Tabs>,
    );

    tabs.forEach((tab) => {
      fireEvent.click(getByText(tab.title as string));
      expect(getByText(`${tab.title}_content`)).toBeInTheDocument();
    });
  });

  it('test <Tabs/> vertical prop', async () => {
    const { rerender } = render(
      <Tabs tabs={tabs} vertical testingID="testingID">
        {tabsRenderer}
      </Tabs>,
    );

    expect(document.querySelector<HTMLElement>('[data-lens-tabs-orientation="tabs--vertical"]')).toBeInTheDocument();

    rerender(
      <Tabs tabs={tabs} testingID="testingID">
        {tabsRenderer}
      </Tabs>,
    );

    expect(document.querySelector<HTMLElement>('[data-lens-tabs-orientation="tabs--horizontal"]')).toBeInTheDocument();
  });
});
