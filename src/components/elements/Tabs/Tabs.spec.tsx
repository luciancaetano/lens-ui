import React, { useState } from 'react';

import { fireEvent, render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import LensProvider from '../../providers/LensProvider/LensProvider';
import Tabs from './Tabs';
import { ITabsItem } from './Tabs.types';

const tabs:ITabsItem[] = [
  {
    id: '1',
    title: 'Tab1',
    onClick: jest.fn(),
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

const tabsRenderer = (activeTab: ITabsItem | null) => (
  <div>{`${activeTab?.title}_content`}</div>
);

describe('<Tabs/>', () => {
  it('render <Tabs/>', async () => {
    const { getByText } = render(
      <LensProvider>
        <Tabs tabs={tabs}>
          {tabsRenderer}
        </Tabs>
      </LensProvider>,
    );

    tabs.forEach((tab) => {
      expect(getByText(tab.title as string)).toBeInTheDocument();
    });
  });

  it('test <Tabs/> rendering change', async () => {
    const { getByText } = render(
      <LensProvider>
        <Tabs tabs={tabs}>
          {tabsRenderer}
        </Tabs>
      </LensProvider>,
    );

    tabs.forEach((tab) => {
      fireEvent.click(getByText(tab.title as string));
      expect(getByText(`${tab.title}_content`)).toBeInTheDocument();
    });
  });

  it('test <Tabs/> controlled', async () => {
    const hook = renderHook(() => useState('1'));

    const onChange = (id) => {
      act(() => {
        hook.result.current[1](id);
      });
    };

    const { getByText, rerender } = render(
      <LensProvider>
        <Tabs tabs={tabs} activeTab={hook.result.current[0]} onChange={onChange}>
          {tabsRenderer}
        </Tabs>
      </LensProvider>,
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
      <LensProvider>
        <Tabs tabs={tabs} activeTab={hook.result.current[0]} onChange={onChange}>
          {tabsRenderer}
        </Tabs>
      </LensProvider>,
    );

    expect(getByText(`${tabs[2].title}_content`)).toBeInTheDocument();
  });

  it('test <Tabs/> run tabClick event', async () => {
    const { getByText } = render(
      <LensProvider>
        <Tabs tabs={tabs}>
          {tabsRenderer}
        </Tabs>
      </LensProvider>,
    );

    tabs.forEach((tab) => {
      fireEvent.click(getByText(tab.title as string));
      expect(getByText(`${tab.title}_content`)).toBeInTheDocument();
    });

    expect((tabs[0].onClick as jest.Mock<any, any>)).toHaveBeenCalled();
  });

  it('test <Tabs/> vertical prop', async () => {
    const { getByTestId, rerender } = render(
      <LensProvider>
        <Tabs tabs={tabs} vertical testingID="testingID">
          {tabsRenderer}
        </Tabs>
      </LensProvider>,
    );

    expect(document.querySelector('[data-lens-tabs-orientation="tabs--vertical"]')).toBeInTheDocument();

    rerender(
      <LensProvider>
        <Tabs tabs={tabs} testingID="testingID">
          {tabsRenderer}
        </Tabs>
      </LensProvider>,
    );

    expect(document.querySelector('[data-lens-tabs-orientation="tabs--horizontal"]')).toBeInTheDocument();
  });
});
