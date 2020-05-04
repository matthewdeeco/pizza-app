import React from 'react';

import SelectableButton from './SelectableButton';

const PizzaSizeOption: React.FC<{
  name: string;
  price: number;
  pizzaSize: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ name, price, pizzaSize = '100%', isSelected = false, onClick }) => {
  return (
    <SelectableButton isSelected={isSelected} onClick={() => onClick()}>
      <SelectableButton.ImageContainer>
        <img
          width={pizzaSize}
          height={pizzaSize}
          alt=""
          src="/pizza128.png"
        />
      </SelectableButton.ImageContainer>
      {name} (${price})
    </SelectableButton>
  );
};

export default PizzaSizeOption;
