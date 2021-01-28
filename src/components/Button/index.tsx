import { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Footer: React.FC<InputProps> = ({ children, ...rest }) => {
  return (
    <>
      <Button {...rest}>{children}</Button>
    </>
  );
};

export default Footer;
