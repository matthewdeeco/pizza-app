import React from 'react';

import styled from '../styled';

const ImageContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  font-family: '${(props) => props.theme.fonts.body}';
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gunmetal};
  border: 1px solid ${(props) => props.theme.colors.gunmetal};
  width: 100%;
  margin: 0.25rem 1rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  transition: background-color 0.15s ease-in;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  &:active, &:hover, &:focus {
    background-color: ${(props) => props.theme.colors.androidGreen}22;
  }
  &.active {
    background-color: ${(props) => props.theme.colors.androidGreen}55;
  }
  &:hover {
    cursor: pointer;
  }
`;

interface SelectableButtonComposition {
  ImageContainer: React.FC<{}>;

}

const SelectableButton: React.FC<{
  isSelected?: boolean;
  onClick: () => void;
}> & SelectableButtonComposition = ({ isSelected = false, onClick, children }) => {
  return (
    <StyledButton
      className={isSelected ? 'active' : ''}
      onClick={() => onClick()}
    >
      {children}
    </StyledButton>
  );
};

SelectableButton.ImageContainer = ImageContainer;

export default SelectableButton;
