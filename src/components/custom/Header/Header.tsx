
import * as React from 'react';

import * as Assets from 'assets'
import * as Hooks from 'hooks'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const theme = Hooks.common.useTheme()

  const textColor = theme.current.name === 'dark' ? theme.current.text.primaryColor : undefined
  
  return (
    <header { ...props }>
      <Assets.Svgs.Logo $textcolor={textColor} size='45px' />
    </header>
  );
};

export default Header;