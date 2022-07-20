import styled, { css } from 'styled-components';

interface LabelProps {
  fieldValid: boolean;
  hasContent: boolean;
}

export const Label = styled.label<LabelProps>`
  margin-bottom: 1.5rem;

  :focus-within {
    color: ${({ theme }) => theme.colors.red};
  }

  ${({ theme, fieldValid, hasContent }) => hasContent && css`
    color: ${fieldValid ? theme.colors.green : theme.colors.red};
  `}
`;

interface LabelTextProps {
  hasContent: boolean;
}

export const LabelText = styled.p<LabelTextProps>`
  display: block;
  height: 1rem;
  margin-bottom: 0.4rem;
  transition: all 500ms;
  user-select: none;
  font-size: 0.75rem;
  line-height: 1rem;
  
  ${({ hasContent }) => !hasContent && css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    position: relative;
    top: 1.5rem;
    left: 0.5rem;
    cursor: text;
  `}

  ${Label}:focus-within & {
    top: 0;
    left: 0;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  padding: 0.25rem;
  outline: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.font};
  background-color: transparent;
`;

interface TextAreaProps {
  fieldValid: boolean;
  hasContent: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  padding: 0.25rem;
  border-radius: 0.125rem;
  border: 1px solid $gray-med;
  outline: none;
  resize: none;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.font};

  :focus-within {
    border: 1px solid ${({ theme }) => theme.colors.red};
  }

  ${({ hasContent, theme, fieldValid }) => hasContent && css`
    border: 1px solid ${fieldValid ? theme.colors.green : theme.colors.red};
  `}
`;
