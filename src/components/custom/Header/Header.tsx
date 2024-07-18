
import * as React from 'react';

import * as Assets from 'assets'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header { ...props }>
      <Assets.Svgs.Logo size='45px' />
    </header>
  );
};

export default Header;