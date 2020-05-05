import React from 'react';

import SelectableButton from './SelectableButton';

const PizzaIngredientOption: React.FC<{
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ name, imageUrl, isSelected = false, onClick }) => {
  return (
    <SelectableButton isSelected={isSelected} onClick={() => onClick()}>
      <SelectableButton.ImageContainer>
        <img width="90%" alt="" src={imageUrl} />
      </SelectableButton.ImageContainer>
      {name}
    </SelectableButton>
  );
};

export default PizzaIngredientOption;
