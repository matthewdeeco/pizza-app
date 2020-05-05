import { ThemeProvider } from 'emotion-theming';
import React from 'react';

import AttributionFooter from './components/AttributionFooter';
import CreatePizzaRoute from './containers/CreatePizzaRoute';
import styled from './styled';
import theme from './theme';

const PageContainer = styled.section`
  padding: 1rem 0;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 3rem 0;
  }
  max-width: 60rem;
  margin: 0 auto;
  text-align: center;
`;

const App: React.FC<{}> = () => {
  const pizzaSizes = {
    sm: {
      id: 'sm',
      name: 'Small',
      price: 8,
      imageSize: '60%',
      maxIngredients: 5,
    },
    md: {
      id: 'md',
      name: 'Medium',
      price: 10,
      imageSize: '80%',
      maxIngredients: 7,
    },
    lg: {
      id: 'lg',
      name: 'Large',
      price: 12,
      imageSize: '100%',
      maxIngredients: 9,
    },
  };

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

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <CreatePizzaRoute
          pizzaSizes={pizzaSizes}
          pizzaCrusts={pizzaCrusts}
          ingredients={ingredients}
        />
        <AttributionFooter />
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
