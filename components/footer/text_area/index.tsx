import React from 'react';
import styles from './styles.module.scss';

interface TextAreaProps {
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  text: string;
  fieldValid: boolean;
}

const TextArea = ({ field, setField, name, text, fieldValid }: TextAreaProps) => {
  const handleClick = (event: React.MouseEvent) => {
    const nextElementSibling = event.currentTarget.nextElementSibling as HTMLElement;
    nextElementSibling.focus()
  };

  const fieldLabelInvalid =
    field.length > 0 ? styles.labelInvalid : styles.labelInvalidContent;

  const fieldTextAreaInvalid =
    field.length > 0 ? styles.textAreaInvalid : styles.textAreaInvalidContent;

  return (
    <label
      htmlFor={name}
      className={`${styles.label} ${fieldValid ? styles.labelValid : fieldLabelInvalid}`}
    >
      <p
        className={`${styles.labelText} ${field.length === 0 && styles.labelTextContent}`}
        onClick={handleClick}
      >
        {text}
      </p>
      <textarea
        name={name}
        value={field}
        onChange={(event) => setField(event.target.value)}
        required
        rows={5}
        className={`${styles.textArea} ${fieldValid ? styles.textAreaValid : fieldTextAreaInvalid}`}
      />
    </label>
  );
}

export default TextArea;
