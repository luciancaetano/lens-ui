import React from 'react';
import { render } from '@testing-library/react';
import Typography from './Typography';

describe('<Typography/>', () => {
  it('should render', () => {
    const { container } = render(
      <Typography variant="h1">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with noWrap', () => {
    const { container } = render(
      <Typography variant="h1" noWrap>
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with intent', () => {
    const { container } = render(
      <Typography variant="h1" intent="primary">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with children', () => {
    const { container } = render(
      <Typography variant="h1">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with children and noWrap', () => {
    const { container } = render(
      <Typography variant="h1" noWrap>
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with children and intent', () => {
    const { container } = render(
      <Typography variant="h1" intent="primary">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with children and noWrap and intent', () => {
    const { container } = render(
      <Typography variant="h1" noWrap intent="primary">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  // test variants

  it('should render with variant h1', () => {
    const { container } = render(
      <Typography variant="h1">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant h2', () => {
    const { container } = render(
      <Typography variant="h2">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant h3', () => {
    const { container } = render(
      <Typography variant="h3">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant h4', () => {
    const { container } = render(
      <Typography variant="h4">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant h5', () => {
    const { container } = render(
      <Typography variant="h5">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant h6', () => {
    const { container } = render(
      <Typography variant="h6">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant subtitle1', () => {
    const { container } = render(
      <Typography variant="subtitle1">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant subtitle2', () => {
    const { container } = render(
      <Typography variant="subtitle2">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant body1', () => {
    const { container } = render(
      <Typography variant="body1">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant body2', () => {
    const { container } = render(
      <Typography variant="body2">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant caption', () => {
    const { container } = render(
      <Typography variant="caption">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant button', () => {
    const { container } = render(
      <Typography variant="button">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with variant overline', () => {
    const { container } = render(
      <Typography variant="overline">
        Hello World
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });
});
