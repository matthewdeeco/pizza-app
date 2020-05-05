import React from 'react';

import SelectableButton from './SelectableButton';

const PizzaCrustOption: React.FC<{
  name: string;
  price: number;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ name, price, imageUrl, isSelected = false, onClick }) => {
  return (
    <SelectableButton isSelected={isSelected} onClick={() => onClick()}>
      <SelectableButton.ImageContainer>
        <img
          className="selectable-button-img"
          width="75%"
          alt=""
          src={imageUrl}
        />
      </SelectableButton.ImageContainer>
      {name} (+${price})
    </SelectableButton>
  );
};

export default PizzaCrustOption;
