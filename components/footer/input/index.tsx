import { useAppSelector } from '../../../hooks/use_redux';
import styles from './styles.module.scss';

interface InputProps {
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  text: string;
  fieldValid: boolean;
}

const Input = ({
  field, setField, name, text, fieldValid,
}: InputProps) => {
  const darkTheme = useAppSelector((state) => state.darkTheme);

  const type = field === 'email' ? 'email' : 'text';

  const handleClick = (event: React.MouseEvent) => {
    const nextElementSibling = event.currentTarget.nextElementSibling as HTMLElement;
    nextElementSibling.focus();
  };

  const invalidField = field.length > 0
    ? styles.labelInvalid
    : styles.labelInvalidContent;

  return (
    <label
      htmlFor={name}
      className={`${styles.label} ${fieldValid ? styles.labelValid : invalidField}`}
    >
      <button
        className={`${styles.labelText} ${field.length === 0 && styles.labelTextContent}`}
        onClick={handleClick}
        type="button"
      >
        {text}
      </button>
      <input
        type={type}
        name={name}
        value={field}
        onChange={(event) => setField(event.target.value)}
        required
        className={`${styles.input} ${darkTheme && styles.inputDark}`}
      />
    </label>
  );
};

export default Input;
