import React from 'react';

import SelectableButton from './SelectableButton';

const PizzaIngredientOption: React.FC<{
  name: string;
  price: number;
  imageUrl: string;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}> = ({ name, price, imageUrl, isSelected = false, isDisabled = false, onClick }) => {
  return (
    <SelectableButton isSelected={isSelected} isDisabled={isDisabled} onClick={() => onClick()}>
      <SelectableButton.ImageContainer>
        <img width="90%" alt="" src={imageUrl} />
      </SelectableButton.ImageContainer>
      {name} ({price ? `+$${price}` : 'Free'})
    </SelectableButton>
  );
};

export default PizzaIngredientOption;
