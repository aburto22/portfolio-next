import * as styles from './styles';

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
  const type = field === 'email' ? 'email' : 'text';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const nextElementSibling = event.currentTarget.nextElementSibling as HTMLElement;
    nextElementSibling?.focus();
  };

  const hasContent = field.length > 0;

  return (
    <styles.Label hasContent={hasContent} fieldValid={fieldValid} htmlFor={name}>
      <styles.LabelText hasContent={hasContent} onClick={handleClick}>
        {text}
      </styles.LabelText>
      <styles.Input
        type={type}
        name={name}
        value={field}
        onChange={(event) => setField(event.target.value)}
        required
      />
    </styles.Label>
  );
};

export default Input;
