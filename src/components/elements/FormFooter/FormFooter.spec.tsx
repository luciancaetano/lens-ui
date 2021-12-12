import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import FormFooter from './FormFooter';

describe('<FormFooter/>', () => {
  it('should check if the children content is present', () => {
    const childrenContent = 'My-Children-Component';
    const { getByText } = render(
      <FormFooter state="ready" testingID="testing-target">{childrenContent}</FormFooter>,
    );

    expect(getByText(childrenContent)).toBeInTheDocument();
  });

  it('should render children positions', () => {
    const childrenContent = 'My-Children-Component';

    expect(render(
      <FormFooter state="ready" childrenPos="afterCancel" testingID="testing-target">{childrenContent}</FormFooter>,
    ).container.firstChild).toMatchSnapshot();

    expect(render(
      <FormFooter state="ready" childrenPos="afterDelete" testingID="testing-target">{childrenContent}</FormFooter>,
    ).container.firstChild).toMatchSnapshot();

    expect(render(
      <FormFooter state="ready" childrenPos="afterSave" testingID="testing-target">{childrenContent}</FormFooter>,
    ).container.firstChild).toMatchSnapshot();

    expect(render(
      <FormFooter state="ready" childrenPos="beforeCancel" testingID="testing-target">{childrenContent}</FormFooter>,
    ).container.firstChild).toMatchSnapshot();

    expect(render(
      <FormFooter state="ready" childrenPos="beforeDelete" testingID="testing-target">{childrenContent}</FormFooter>,
    ).container.firstChild).toMatchSnapshot();

    expect(render(
      <FormFooter state="ready" childrenPos="betweenSaveAndCancel" testingID="testing-target">{childrenContent}</FormFooter>,
    ).container.firstChild).toMatchSnapshot();
  });

  it('should validate "ready" state', () => {
    const { container } = render(
      <FormFooter state="ready" testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should validate "saving" state', () => {
    const { container } = render(
      <FormFooter state="saving" testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should validate "saving" state when isUpdate', () => {
    const { container } = render(
      <FormFooter state="saving" isUpdate testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should validate "ready" state when isUpdate', () => {
    const { container } = render(
      <FormFooter state="ready" isUpdate testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should validate "saving" state when cancelIsReset is true', () => {
    const { container } = render(
      <FormFooter state="saving" cancelIsReset testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should validate "saving" state when cancelIsReset is false', () => {
    const { container } = render(
      <FormFooter state="saving" cancelIsReset={false} testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should validate "deleting" state', () => {
    const { container } = render(
      <FormFooter state="deleting" testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should validate "canceling" state', () => {
    const { container } = render(
      <FormFooter state="canceling" testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should validate "cancelIsReset" option', () => {
    const { container } = render(
      <FormFooter state="canceling" cancelIsReset testingID="testing-target" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should receive buttons clicks', () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const onDelete = jest.fn();

    const { container } = render(
      <FormFooter
        state="ready"
        onSave={onSave}
        onCancel={onCancel}
        onDelete={onDelete}
        testingID="testing-target"
      />,
    );

    fireEvent.click(container.querySelector('[data-lens-element-button-parent="form-footer__save"]'));
    fireEvent.click(container.querySelector('[data-lens-element-button-parent="form-footer__cancel"]'));
    fireEvent.click(container.querySelector('[data-lens-element-button-parent="form-footer__delete"]'));

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it('should not receive buttons clicks when is state is saving', () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const onDelete = jest.fn();

    const result = render(
      <FormFooter
        state="saving"
        onSave={onSave}
        onCancel={onCancel}
        onDelete={onDelete}
        testingID="testing-target"
      />,
    );

    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__save"]'));
    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__cancel"]'));
    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__delete"]'));

    expect(onSave).toHaveBeenCalledTimes(0);
    expect(onCancel).toHaveBeenCalledTimes(0);
    expect(onDelete).toHaveBeenCalledTimes(0);
  });

  it('should not receive buttons clicks when is state is deleting', () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const onDelete = jest.fn();

    const result = render(
      <FormFooter
        state="deleting"
        onSave={onSave}
        onCancel={onCancel}
        onDelete={onDelete}
        testingID="testing-target"
      />,
    );

    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__save"]'));
    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__cancel"]'));
    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__delete"]'));

    expect(onSave).toHaveBeenCalledTimes(0);
    expect(onCancel).toHaveBeenCalledTimes(0);
    expect(onDelete).toHaveBeenCalledTimes(0);
  });

  it('should not receive buttons clicks when is state is canceling', () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const onDelete = jest.fn();

    const result = render(
      <FormFooter
        state="canceling"
        onSave={onSave}
        onCancel={onCancel}
        onDelete={onDelete}
        testingID="testing-target"
      />,
    );

    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__save"]'));
    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__cancel"]'));
    fireEvent.click(result.container.querySelector('[data-lens-element-button-parent="form-footer__delete"]'));

    expect(onSave).toHaveBeenCalledTimes(0);
    expect(onCancel).toHaveBeenCalledTimes(0);
    expect(onDelete).toHaveBeenCalledTimes(0);
  });
});
