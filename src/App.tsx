import { ThemeProvider } from 'emotion-theming';
import React, { useState } from 'react';

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

const FlatIconAttributionFooter = styled.footer`
  font-size: 0.5rem;
  color: #f1f1f1;
  position: absolute;
  top: 1rem;
  right: 1rem;
  text-align: right;
  z-index: -1;
  a {
    text-decoration: none;
    color: unset;
  }
`;

function App() {
  const [pizzaSize, setPizzaSize] = useState('md' as null | 'sm' | 'md' | 'lg');
  const [pizzaCrust, setPizzaCrust] = useState(
    'thin' as null | 'thin' | 'thick',
  );

  const ingredients = {
    pepperoni: { id: 'pepperoni', name: 'Pepperoni', imageUrl: '/ingredients/pepperoni.svg' },
    mushroom: { id: 'mushroom', name: 'Mushrooms', imageUrl: '/ingredients/mushroom.svg' },
    onion: { id: 'onion', name: 'Onions', imageUrl: '/ingredients/onion.svg' },
    sausage: { id: 'sausage', name: 'Sausage', imageUrl: '/ingredients/sausage.svg' },
    bacon: { id: 'bacon', name: 'Bacon', imageUrl: '/ingredients/bacon.svg' },
    cheese: { id: 'cheese', name: 'Extra Cheese', imageUrl: '/ingredients/cheese.svg' },
    olives: { id: 'olives', name: 'Black Olives', imageUrl: '/ingredients/olives.svg' },
    pepper: { id: 'pepper', name: 'Green Pepper', imageUrl: '/ingredients/green-pepper.svg' },
    pineapple: { id: 'pineapple', name: 'Pineapple', imageUrl: '/ingredients/pineapple.svg' },
    spinach: { id: 'spinach', name: 'Spinach', imageUrl: '/ingredients/spinach.svg' },
  };

  const ingredientIds = [
    ['pepperoni', 'mushroom', 'onion', 'sausage', 'bacon'],
    ['cheese', 'olives', 'pepper', 'pineapple', 'spinach'],
  ] as (keyof typeof ingredients)[][];

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <StepSection key="select-size">
          <StepHeading>Select the size of your pizza</StepHeading>
          <StepBody>
            <PizzaSizeOption
              name="Small"
              price={8}
              pizzaSize="60%"
              isSelected={pizzaSize === 'sm'}
              onClick={() => setPizzaSize('sm')}
            ></PizzaSizeOption>
            <PizzaSizeOption
              name="Medium"
              price={10}
              pizzaSize="80%"
              isSelected={pizzaSize === 'md'}
              onClick={() => setPizzaSize('md')}
            ></PizzaSizeOption>
            <PizzaSizeOption
              name="Large"
              price={12}
              pizzaSize="100%"
              isSelected={pizzaSize === 'lg'}
              onClick={() => setPizzaSize('lg')}
            ></PizzaSizeOption>
          </StepBody>
        </StepSection>

        {pizzaSize && (
          <StepSection key="select-crust">
            <StepHeading>Which crust type do you prefer?</StepHeading>
            <StepBody>
              <PizzaCrustOption
                name="Thin"
                price={2}
                isSelected={pizzaCrust === 'thin'}
                onClick={() => setPizzaCrust('thin')}
              ></PizzaCrustOption>
              <PizzaCrustOption
                name="Thick"
                price={4}
                isSelected={pizzaCrust === 'thick'}
                onClick={() => setPizzaCrust('thick')}
              ></PizzaCrustOption>
            </StepBody>
          </StepSection>
        )}

        {pizzaCrust && (
          <StepSection key="select-ingredients">
            <StepHeading>What ingredients do you want?</StepHeading>
            <StepSubheading>
              The first 3 ingredients are free; beyond that costs $0.50 each.
            </StepSubheading>
            <StepBody>
              {ingredientIds[0]
                .map((ingredientId) => ingredients[ingredientId])
                .map((ingredient) => (
                  <PizzaIngredientOption
                    key={ingredient.name}
                    name={ingredient.name}
                    imageUrl={ingredient.imageUrl}
                    isSelected={false}
                    onClick={() => {console.log(ingredient.name)}}
                  ></PizzaIngredientOption>
                ))}
            </StepBody>
            <StepBody>
              {ingredientIds[1]
                .map((ingredientId) => ingredients[ingredientId])
                .map((ingredient) => (
                  <PizzaIngredientOption
                    key={ingredient.name}
                    name={ingredient.name}
                    imageUrl={ingredient.imageUrl}
                    isSelected={false}
                    onClick={() => {console.log(ingredient.name)}}
                  ></PizzaIngredientOption>
                ))}
            </StepBody>
          </StepSection>
        )}

        <FlatIconAttributionFooter>
          <header>Attributions:</header>
          <div>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
            >
              Smashicons
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">
              turkkub
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/pause08" title="Pause08">
              Pause08
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/monkik" title="monkik">
              monkik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </FlatIconAttributionFooter>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
