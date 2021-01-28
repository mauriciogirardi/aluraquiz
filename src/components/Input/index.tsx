import { InputHTMLAttributes } from 'react';
import { InputBase } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Footer: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <div>
      <InputBase {...rest} />
    </div>
  );
};

export default Footer;
