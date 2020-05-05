import React, { useState, useEffect } from 'react';

import PizzaCrustOption from '../components/PizzaCrustOption';
import PizzaIngredientOption from '../components/PizzaIngredientOption';
import PizzaSizeOption from '../components/PizzaSizeOption';
import { PizzaSize, PizzaCrust, PizzaIngredient } from '../models/pizza';
import styled from '../styled';

const StepSection = styled.section`
  margin: 0 auto;
  text-align: center;
  padding: 1rem 0.25rem;
`;

const StepHeading = styled.header`
  font-family: '${(props) => props.theme.fonts.heading}';
  font-size: 1.75rem;
  color: ${(props) => props.theme.colors.androidGreen};
  margin-bottom: 0.5rem;
`;

const StepSubheading = styled.header`
  font-family: '${(props) => props.theme.fonts.heading}';
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.gunmetal}dd;
  margin-bottom: 0.5rem;
`;

const StepBody = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const CreatePizzaRoute: React.FC<{
  pizzaSizes: Record<PizzaSize['id'], PizzaSize>;
  pizzaCrusts: Record<PizzaCrust['id'], PizzaCrust>;
  ingredients: Record<PizzaIngredient['id'], PizzaIngredient>;
}> = ({ pizzaSizes, pizzaCrusts, ingredients }) => {
  const [selectedPizzaSize, setSelectedPizzaSize] = useState('' as PizzaSize['id']);
  const [selectedPizzaCrust, setSelectedPizzaCrust] = useState('' as PizzaCrust['id']);
  const [selectedIngredients, setSelectedIngredients] = useState([] as PizzaIngredient['id'][]);

  const pizzaSizeIds = Object.keys(pizzaSizes);
  const pizzaCrustIds = Object.keys(pizzaCrusts);
  const ingredientIds = Object.keys(ingredients);
  const ingredientGroupIds = [
    ingredientIds.slice(0, ingredientIds.length / 2),
    ingredientIds.slice(ingredientIds.length / 2),
  ];

  const addIngredient = (ingredientId: PizzaIngredient['id']) => {
    setSelectedIngredients([...selectedIngredients, ingredientId]);
  };

  const removeIngredient = (ingredientId: PizzaIngredient['id']) => {
    setSelectedIngredients(selectedIngredients.filter((id) => id !== ingredientId));
  };

  const toggleIngredient = (ingredientId: PizzaIngredient['id']) => {
    if (selectedIngredients.includes(ingredientId)) {
      removeIngredient(ingredientId);
    } else {
      addIngredient(ingredientId);
    }
  };

  const getIngredientPrice = (ingredientId: PizzaIngredient['id']) => {
    const maxFreeIngredients = 3;
    if (selectedIngredients.length < maxFreeIngredients) {
      return 0;
    }
    const index = selectedIngredients.indexOf(ingredientId);
    if (index >= 0 && index < maxFreeIngredients) {
      return 0;
    } else {
      return 0.5;
    }
  };

  const isIngredientEnabled = (ingredientId: PizzaIngredient['id']) => {
    if (selectedIngredients.length < pizzaSizes[selectedPizzaSize].maxIngredients) {
      return true;
    } else {
      return selectedIngredients.includes(ingredientId);
    }
  };

  useEffect(() => {
    if (selectedIngredients.length > pizzaSizes[selectedPizzaSize]?.maxIngredients) {
      // reset selected ingredients if new pizza size cannot fit all ingredients
      setSelectedIngredients([]);
    }
  }, [selectedPizzaSize, pizzaSizes, selectedIngredients]);

  return (
    <section>
      <StepSection key="select-size">
        <StepHeading>Select the size of your pizza</StepHeading>
        <StepBody>
          {pizzaSizeIds
            .map((id) => pizzaSizes[id])
            .map((pizzaSize) => (
              <PizzaSizeOption
                key={pizzaSize.id}
                name={pizzaSize.name}
                price={pizzaSize.price}
                imageSize={pizzaSize.imageSize}
                isSelected={selectedPizzaSize === pizzaSize.id}
                onClick={() => setSelectedPizzaSize(pizzaSize.id)}
              ></PizzaSizeOption>
            ))}
        </StepBody>
      </StepSection>

      {selectedPizzaSize && (
        <StepSection key="select-crust">
          <StepHeading>Which crust type do you prefer?</StepHeading>
          <StepBody>
            {pizzaCrustIds
              .map((id) => pizzaCrusts[id])
              .map((pizzaCrust) => (
                <PizzaCrustOption
                  key={pizzaCrust.id}
                  name={pizzaCrust.name}
                  price={pizzaCrust.price}
                  imageUrl={pizzaCrust.imageUrl}
                  isSelected={selectedPizzaCrust === pizzaCrust.id}
                  onClick={() => setSelectedPizzaCrust(pizzaCrust.id)}
                ></PizzaCrustOption>
              ))}
          </StepBody>
        </StepSection>
      )}

      {selectedPizzaCrust && (
        <StepSection key="select-ingredients">
          <StepHeading>What ingredients do you want?</StepHeading>
          <StepSubheading>
            The first 3 ingredients are free; beyond that costs $0.50 each.
          </StepSubheading>
          <StepSubheading>
            You can select{' '}
            {pizzaSizes[selectedPizzaSize].maxIngredients - selectedIngredients.length} more
            ingredient/s.
          </StepSubheading>

          {ingredientGroupIds.map((ingredientIds, index) => (
            <StepBody key={index}>
              {ingredientIds
                .map((ingredientId) => ingredients[ingredientId])
                .map((ingredient) => (
                  <PizzaIngredientOption
                    key={ingredient.id}
                    name={ingredient.name}
                    price={getIngredientPrice(ingredient.id)}
                    imageUrl={ingredient.imageUrl}
                    isSelected={selectedIngredients.includes(ingredient.id)}
                    isDisabled={!isIngredientEnabled(ingredient.id)}
                    onClick={() => {
                      toggleIngredient(ingredient.id);
                    }}
                  ></PizzaIngredientOption>
                ))}
            </StepBody>
          ))}
        </StepSection>
      )}
    </section>
  );
};

export default CreatePizzaRoute;
