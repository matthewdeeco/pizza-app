import React from 'react';

import SelectableButton from './SelectableButton';

const PizzaIngredientOption: React.FC<{
  name: string;
  imageUrl: string;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}> = ({ name, imageUrl, isSelected = false, isDisabled = false, onClick }) => {
  return (
    <SelectableButton
      isSelected={isSelected}
      isDisabled={isDisabled}
      onClick={() => onClick()}
    >
      <SelectableButton.ImageContainer>
        <img width="90%" alt="" src={imageUrl} />
      </SelectableButton.ImageContainer>
      {name}
    </SelectableButton>
  );
};

export default PizzaIngredientOption;
