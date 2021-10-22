import React, { useCallback, useState } from 'react';
import {
  Button, LensProvider, ButtonGroup as ButtonGroupCp,
} from '../../src/index';

export default {
  component: ButtonGroupCp,
  title: 'Basic/ButtonGroup',
  excludeStories: /.*Data$/,
};

export const ButtonGroup = () => {
  const [activeIndex, setAciveIndex] = useState(0);

  const handleButtonClick = useCallback((index: number) => () => {
    setAciveIndex(index);
  }, []);

  return (
    <LensProvider>
      <ButtonGroupCp>
        <Button active={activeIndex === 0} onClick={handleButtonClick(0)}>Button1</Button>
        <Button active={activeIndex === 1} onClick={handleButtonClick(1)}>Button2</Button>
        <Button active={activeIndex === 2} onClick={handleButtonClick(2)}>Button3</Button>
        <Button active={activeIndex === 3} disabled onClick={handleButtonClick(3)}>Button4</Button>
      </ButtonGroupCp>
    </LensProvider>
  );
};

export const Vertical = () => {
  const [activeIndex, setAciveIndex] = useState(0);

  const handleButtonClick = useCallback((index: number) => () => {
    setAciveIndex(index);
  }, []);

  return (
    <LensProvider>
      <div style={{ width: 100 }}>
        <ButtonGroupCp vertical>
          <Button active={activeIndex === 0} onClick={handleButtonClick(0)}>Button1</Button>
          <Button active={activeIndex === 1} onClick={handleButtonClick(1)}>Button2</Button>
          <Button active={activeIndex === 2} onClick={handleButtonClick(2)}>Button3</Button>
          <Button active={activeIndex === 3} disabled onClick={handleButtonClick(3)}>Button4</Button>
        </ButtonGroupCp>
      </div>
    </LensProvider>
  );
};
