import React from 'react';

import SelectableButton from './SelectableButton';

const PizzaCrustOption: React.FC<{
  name: 'Thin' | 'Thick';
  price: number;
  isSelected: boolean;
  onClick: () => void;
}> = ({ name, price, isSelected = false, onClick }) => {
  return (
    <SelectableButton isSelected={isSelected} onClick={() => onClick()}>
      <img
        className="selectable-button-img"
        width="75%"
        alt=""
        src={
          name === 'Thin'
            ? '/icons8-compress-100.png'
            : '/icons8-enlarge-100.png'
        }
      />
      {name} (+${price})
    </SelectableButton>
  );
};

export default PizzaCrustOption;
