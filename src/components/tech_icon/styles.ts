import styled from 'styled-components';

export const TechIcon = styled.div`
  padding: 10%;
  box-shadow: ${({ theme }) => theme.boxShadow.form};
  border-radius: 0.25rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.techIconBackground};
`;

export const Tooltip = styled.div`
  position: absolute;
  border-radius: 0.25rem;
  top: -2.5rem;
  width: max-content;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow.button};
  padding: 0.25rem 0.5rem;
  display: none;
  background-color: ${({ theme }) => theme.colors.tooltipBackground};
  color: ${({ theme }) => theme.colors.tooltipFont};
  font-size: 0.875rem;
  line-height: 1.25rem;

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.tooltipBackground} transparent transparent transparent;
  }

  ${TechIcon}:hover & {
    display: block;
  }
`;
