import {
  Layers, getPortalContainer, randomId, sleep,
} from '.';

describe('utils', () => {
  it('Layers', () => {
    expect(Layers).toMatchSnapshot();
  });

  it('getPortalContainer', () => {
    const root = window.document.createElement('div');
    root.id = 'lens-ui-portal-root';
    window.document.body.appendChild(root);

    expect(getPortalContainer('my_portal')).toBeInTheDocument();
  });

  it('randomId', () => {
    expect(randomId('', 10, 'abcdef0123456789').length).toBe(10);
    expect(randomId('_prefix', 10, 'abcdef0123456789').startsWith('_prefix')).toBe(true);
  });

  it('sleep', async () => {
    const cancelRef = { current: null };

    const startDate = new Date();

    await sleep(1000, cancelRef);

    const diff = ((new Date()).getTime() - startDate.getTime());

    expect(diff >= 1000 && diff <= 1500).toBe(true);
  });

  it('sleep clear', async () => {
    const cancelRef = { current: null };
    const resolved = jest.fn();

    sleep(1000, cancelRef).then(resolved);

    cancelRef.current();

    await sleep(100);

    expect(resolved).toHaveBeenCalled();
  });

  it('Layers', () => {
    expect(Layers).toMatchSnapshot();
  });
});
