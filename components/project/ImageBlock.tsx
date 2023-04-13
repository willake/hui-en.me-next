import React, { CSSProperties } from 'react';
import styles from '../../styles/project.module.scss';
import Image from 'next/image';

type Props = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const ImageBlock: React.FC<Props> = ({ alt, src, width, height }) => {
  return (
    <div className={styles.contentImage}>
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        layout="intrinsic"
      />
    </div>
  );
};

export default ImageBlock;
