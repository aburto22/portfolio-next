import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem 0.25rem;
  border-radius: 0.25rem;
  position: relative;
  top: -8rem;
  box-shadow: ${({ theme }) => theme.boxShadow.form};
  width: 100%;
  max-width: 42rem;
  border: 1px solid currentColor;
`;

export const Anchor = styled.span`
  width: 0;
  height: 0;
  position: absolute;
  top: -9rem;
`;

export const FormTitle = styled.h2`
  text-align: center;
  padding: 1rem 1rem 0;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
`;

interface MessageProps {
  displayNotice: boolean;
  isSuccess: boolean;
}

export const Message = styled.p<MessageProps>`
  font-size: 0.75rem;
  line-height: 1rem;
  height: 0.5rem;
  text-align: center;
  overflow-wrap: normal;
  word-break: normal;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  ${({ displayNotice, isSuccess, theme }) => displayNotice && css`
    height: ${isSuccess ? '1rem' : '1.5rem'};
    color: ${isSuccess ? theme.colors.green : theme.colors.red};
  `}
`;

export const Form = styled.form`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  margin: 0.75rem auto 0.5rem;
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  text-align: center;
  color: white;
  background: ${({ theme }) => theme.gradients.blue};
  margin-bottom: 0.75rem;
  box-shadow: ${({ theme }) => theme.boxShadow.button};
  width: 100%;
  margin: 0 auto;
  height: 2.5rem;

  :hover {
    background: ${({ theme }) => theme.gradients.blueHover};
  }

  :disabled {
    opacity: 0.5;
    cursor: default;
    background: ${({ theme }) => theme.gradients.blue};
  }
`;
