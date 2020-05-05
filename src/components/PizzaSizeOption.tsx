import React from 'react';

import SelectableButton from './SelectableButton';

const PizzaSizeOption: React.FC<{
  name: string;
  price: number;
  imageSize: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ name, price, imageSize = '100%', isSelected = false, onClick }) => {
  return (
    <SelectableButton isSelected={isSelected} onClick={() => onClick()}>
      <SelectableButton.ImageContainer>
        <img width={imageSize} height={imageSize} alt="" src="/pizza128.png" />
      </SelectableButton.ImageContainer>
      {name} (${price})
    </SelectableButton>
  );
};

export default PizzaSizeOption;
