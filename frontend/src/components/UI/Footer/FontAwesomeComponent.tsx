import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

interface Props {
  fontIcon: IconProp,
  href: string
}

const FontAwesomeComponent: React.FC<Props> = ({ href, fontIcon }) => {
  return (
      <>
        <a href={href} className="me-5 text-decoration-none" target='blank'>
             <FontAwesomeIcon icon={fontIcon} />
        </a>
      </>
  );
}

export default FontAwesomeComponent