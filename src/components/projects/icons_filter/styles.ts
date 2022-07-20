import styled from 'styled-components';

export const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

interface FilterButtonProps {
  isSelected: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.boxShadow.button};
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: ${({ isSelected, theme }) => (
    isSelected ? theme.colors.filterButtonBackgroundSelected : theme.colors.filterButtonBackground
  )};
  color: ${({ isSelected, theme }) => (
    isSelected ? theme.colors.filterButtonFontSelected : theme.colors.filterButtonFont
  )};
`;
