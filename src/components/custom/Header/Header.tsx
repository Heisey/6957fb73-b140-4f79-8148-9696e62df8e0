
import * as React from 'react';

import * as Assets from 'assets'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Assets.Svgs.Logo size='45px' />
    </header>
  );
};

export default Header;