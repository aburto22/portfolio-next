import * as styles from './styles';

interface TextAreaProps {
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  text: string;
  fieldValid: boolean;
}

const TextArea = ({
  field, setField, name, text, fieldValid,
}: TextAreaProps) => {
  const handleClick = (event: React.MouseEvent) => {
    const nextElementSibling = event.currentTarget.nextElementSibling as HTMLElement;
    nextElementSibling.focus();
  };

  const hasContent = field.length > 0;

  return (
    <styles.Label hasContent={hasContent} fieldValid={fieldValid} htmlFor={name}>
      <styles.LabelText onClick={handleClick} hasContent={hasContent}>
        {text}
      </styles.LabelText>
      <styles.TextArea
        name={name}
        value={field}
        onChange={(event) => setField(event.target.value)}
        required
        hasContent={hasContent}
        fieldValid={fieldValid}
        rows={5}
      />
    </styles.Label>
  );
};

export default TextArea;
