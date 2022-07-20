import styled, { css } from 'styled-components';

interface LabelProps {
  fieldValid: boolean;
  hasContent: boolean;
}

export const Label = styled.label<LabelProps>`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};

  :focus-within {
    border-bottom: 1px solid ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
  }

  ${({ theme, fieldValid, hasContent }) => hasContent && css`
    color: ${fieldValid ? theme.colors.green : theme.colors.red};
    border-bottom: 1px solid ${fieldValid ? theme.colors.green : theme.colors.red};
  `}
`;

interface LabelTextProps {
  hasContent: boolean;
}

export const LabelText = styled.p<LabelTextProps>`
  height: 1rem;
  user-select: none;
  transition: all 500ms;
  font-size: 0.75rem;
  line-height: 1rem;
  
  ${({ hasContent }) => !hasContent && css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    position: relative;
    top: 1.25rem;
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
