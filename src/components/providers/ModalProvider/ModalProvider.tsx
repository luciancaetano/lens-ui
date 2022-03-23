import ReactDOM from 'react-dom';
import filter from 'lodash/filter';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
import omit from 'lodash/omit';
import React, {
  useState, useCallback, useRef, useEffect,
  useMemo,
} from 'react';
import ModalContext from './ModalContext';
import { PORTAL_ROOT_ID } from '../../../css-classes';
import { getPortalContainer } from '../../../utils';

const ModalProvider: React.FC = ({ children }) => {
  const [isOpenLayers, setIsOpen] = useState<Record<number, boolean>>({});
  const activeModalComponent = useRef<React.ComponentType[]>([]);
  const [props, setProps] = useState<Record<number, any>>({});
  const resolver = useRef<Record<number, Function>>({});

  const setIsOpenLayer = useCallback((layer: number, value: boolean) => {
    setIsOpen((open) => ({ ...open, [layer]: value }));
  }, []);

  const setPropsLayer = useCallback((layer: number, value: any) => {
    setProps((p) => ({ ...p, [layer]: value }));
  }, []);

  const showModal = useCallback((modalComponent: React.ComponentType, params: any) => {
    const layer = activeModalComponent.current.length;
    setIsOpenLayer(layer, false);
    activeModalComponent.current[layer] = modalComponent;
    setIsOpenLayer(layer, true);
    setPropsLayer(layer, params);
    return new Promise((r) => {
      resolver.current[layer] = r;
    });
  }, [setIsOpenLayer, setPropsLayer]);

  const closeModal = useCallback((resolverResponse: any) => {
    const layer = activeModalComponent.current.length - 1;

    activeModalComponent.current = activeModalComponent.current.filter((m, l) => l !== layer);
    setIsOpenLayer(layer, false);
    setPropsLayer(layer, null);

    if (typeof resolver.current[layer] === 'function') {
      resolver.current[layer](resolverResponse || null);
      resolver.current = omit(resolver.current, layer);
    }
  }, [resolver, setIsOpenLayer, setPropsLayer]);

  useEffect(() => {
    forEach(isOpenLayers, (open, layer) => {
      if (!open && resolver.current && typeof resolver.current[layer] === 'function') {
        resolver.current[layer](null);
        resolver.current = omit(resolver.current, layer);
      }
    });
  }, [isOpenLayers]);

  const isOpen = useMemo(() => filter(isOpenLayers, (l) => !!l).length > 0, [isOpenLayers]);

  const data = useMemo(() => ({
    isOpen,
    props,
    closeModal,
    showModal,
  }), [isOpen, props, closeModal, showModal]);

  return (
    <ModalContext.Provider value={data}>
      <div id={PORTAL_ROOT_ID} />
      {activeModalComponent.current && typeof window !== 'undefined' && map(
        activeModalComponent.current,
        (ModalComponent: any, layer) => ReactDOM.createPortal(
          <ModalComponent key={layer} {...(props || {})[layer] || {}} />,
          typeof window !== 'undefined' ? getPortalContainer('lens-ui-portal-modal-root') : null,
        ),
      )}
      {React.Children.toArray(children)}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
