import React from 'react';

import styled from '../styled';

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
    background-color: ${(props) => props.theme.colors.androidGreen}66;
  }
  &:hover {
    cursor: pointer;
  }
`;

const PizzaImageContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PizzaSizeButton: React.FC<{
  name: string;
  price: number;
  pizzaSize: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ name, price, pizzaSize = '100%', isSelected = false, onClick }) => {
  return (
    <StyledButton
      className={isSelected ? 'active' : ''}
      onClick={() => onClick()}
    >
      <PizzaImageContainer>
        <img
          width={pizzaSize}
          height={pizzaSize}
          style={{ opacity: '75%' }}
          alt=""
          src="/pizza128.png"
        />
      </PizzaImageContainer>
      {name} (${price})
    </StyledButton>
  );
};
