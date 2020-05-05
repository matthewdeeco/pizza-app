import React from 'react';

import styled from '../styled';

const ImageContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 1rem 0.25rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  font-family: '${(props) => props.theme.fonts.body}';
  white-space: nowrap;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gunmetal};
  border: 1px solid ${(props) => props.theme.colors.gunmetal};
  width: 100%;
  margin: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  transition: background-color 0.15s ease-in;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  &:active, &:hover:not(:disabled), &:focus {
    background-color: ${(props) => props.theme.colors.androidGreen}33;
  }
  &.active:not(:disabled) {
    background-color: ${(props) => props.theme.colors.androidGreen}66;
  }
  &:hover:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

interface SelectableButtonComposition {
  ImageContainer: React.FC<{}>;
}

const SelectableButton: React.FC<{
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}> &
  SelectableButtonComposition = ({
  isSelected = false,
  isDisabled = false,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      className={isSelected ? 'active' : ''}
      onClick={() => onClick()}
      disabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
};

SelectableButton.ImageContainer = ImageContainer;

export default SelectableButton;
