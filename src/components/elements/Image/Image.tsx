import clsx from 'clsx';
import React, { useCallback } from 'react';
import { IImageProps } from './Image.types';
import styles from './Image.module.scss';

const Image = React.forwardRef<HTMLImageElement, IImageProps>(({
  className, testingID, id, alt, src, ...props
}, ref) => {
  const [loading, setLoading] = React.useState(true);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  const loadingSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  return (
    <img
      id={id}
      data-testid={testingID}
      data-lens-element="image"
      className={clsx(
        styles.image,
        className,
      )}
      ref={ref}
      alt={alt}
      src={loading ? loadingSrc : src}
      onLoad={handleLoad}
      {...props}
    />
  );
});

export default Image;
