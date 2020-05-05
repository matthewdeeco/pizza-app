import { ThemeProvider } from 'emotion-theming';
import React, { useState } from 'react';

import AttributionFooter from './components/AttributionFooter';
import PizzaCrustOption from './components/PizzaCrustOption';
import PizzaIngredientOption from './components/PizzaIngredientOption';
import PizzaSizeOption from './components/PizzaSizeOption';
import styled from './styled';
import theme from './theme';

const PageContainer = styled.section`
  padding-top: 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-top: 3rem;
  }
  max-width: 60rem;
  margin: 0 auto;
  text-align: center;
`;

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
  margin-bottom: 0.75rem;
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

function App() {
  const [selectedPizzaSize, setSelectedPizzaSize] = useState('');
  const [selectedPizzaCrust, setSelectedPizzaCrust] = useState('');

  const pizzaSizes = {
    sm: {
      id: 'sm',
      name: 'Small',
      price: 8,
      imageSize: '60%',
    },
    md: {
      id: 'md',
      name: 'Medium',
      price: 10,
      imageSize: '80%',
    },
    lg: {
      id: 'lg',
      name: 'Large',
      price: 12,
      imageSize: '100%',
    },
  };
  const pizzaSizeIds = Object.keys(pizzaSizes) as (keyof typeof pizzaSizes)[];

  const pizzaCrusts = {
    thin: {
      id: 'thin',
      name: 'Thin',
      price: 2,
      imageUrl: '/icons8-compress-100.png',
    },
    thick: {
      id: 'thick',
      name: 'Thick',
      price: 4,
      imageUrl: '/icons8-enlarge-100.png',
    },
  };
  const pizzaCrustIds = Object.keys(
    pizzaCrusts,
  ) as (keyof typeof pizzaCrusts)[];

  const ingredients = {
    pepperoni: {
      id: 'pepperoni',
      name: 'Pepperoni',
      imageUrl: '/ingredients/pepperoni.svg',
    },
    mushroom: {
      id: 'mushroom',
      name: 'Mushrooms',
      imageUrl: '/ingredients/mushroom.svg',
    },
    onion: { id: 'onion', name: 'Onions', imageUrl: '/ingredients/onion.svg' },
    sausage: {
      id: 'sausage',
      name: 'Sausage',
      imageUrl: '/ingredients/sausage.svg',
    },
    bacon: { id: 'bacon', name: 'Bacon', imageUrl: '/ingredients/bacon.svg' },
    cheese: {
      id: 'cheese',
      name: 'Extra Cheese',
      imageUrl: '/ingredients/cheese.svg',
    },
    olive: {
      id: 'olive',
      name: 'Black Olives',
      imageUrl: '/ingredients/olives.svg',
    },
    pepper: {
      id: 'pepper',
      name: 'Green Pepper',
      imageUrl: '/ingredients/green-pepper.svg',
    },
    pineapple: {
      id: 'pineapple',
      name: 'Pineapple',
      imageUrl: '/ingredients/pineapple.svg',
    },
    spinach: {
      id: 'spinach',
      name: 'Spinach',
      imageUrl: '/ingredients/spinach.svg',
    },
  };

  const ingredientGroupIds = [
    ['pepperoni', 'mushroom', 'onion', 'sausage', 'bacon'],
    ['cheese', 'olive', 'pepper', 'pineapple', 'spinach'],
  ] as (keyof typeof ingredients)[][];

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
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

            {ingredientGroupIds.map((ingredientIds, index) => (
              <StepBody key={index}>
                {ingredientIds
                  .map((ingredientId) => ingredients[ingredientId])
                  .map((ingredient) => (
                    <PizzaIngredientOption
                      key={ingredient.id}
                      name={ingredient.name}
                      isDisabled={ingredient.id === 'olive'}
                      imageUrl={ingredient.imageUrl}
                      isSelected={false}
                      onClick={() => {
                        console.log(ingredient.id);
                      }}
                    ></PizzaIngredientOption>
                  ))}
              </StepBody>
            ))}
          </StepSection>
        )}
        <AttributionFooter />
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
