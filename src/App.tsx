import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';

import AttributionFooter from './components/AttributionFooter';
import { AppStatus } from './models/app-status';
import { Pizza, PizzaCrust, PizzaIngredient, PizzaSize } from './models/pizza';
import CheckoutPage from './pages/CheckoutPage';
import CreatePizzaPage from './pages/CreatePizzaPage';
import ThankYouPage from './pages/ThankYouPage';
import * as actions from './store/actions';
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
  font-family: '${(props) => props.theme.fonts.body}';
`;

function mapStateToProps(state: RootState) {
  return {
    pizza: state.pizza,
    appStatus: state.appStatus,
  };
}

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type AppProps = PropsFromRedux & {};

const App: React.FC<AppProps> = ({ pizza, appStatus }) => {
  const dispatch = useDispatch();

  const pizzaSizes: Record<PizzaSize['id'], PizzaSize> = {
    sm: {
      id: 'sm',
      name: 'Small',
      price: 8,
      imageSize: '66%',
      maxIngredients: 5,
    },
    md: {
      id: 'md',
      name: 'Medium',
      price: 10,
      imageSize: '83%',
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

  const pizzaCrusts: Record<PizzaCrust['id'], PizzaCrust> = {
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

  const ingredients: Record<PizzaIngredient['id'], PizzaIngredient> = {
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

  const checkoutPizza = (pizza: Pizza) => {
    dispatch(actions.checkoutPizza(pizza));
  };

  const confirmOrder = () => {
    dispatch(actions.confirmOrder());
  };

  const editPizza = () => {
    dispatch(actions.editPizza());
  };

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        {/* We use `display: none` here so that the state doesn't reset when going back from checkout */}
        {appStatus < AppStatus.ORDER_CONFIRMED && (
          <div style={{ display: appStatus === AppStatus.CREATE_PIZZA ? 'block' : 'none' }}>
            <CreatePizzaPage
              pizzaSizes={pizzaSizes}
              pizzaCrusts={pizzaCrusts}
              ingredients={ingredients}
              maxFreeIngredients={3}
              pricePerIngredient={0.5}
              onCheckout={checkoutPizza}
            />
          </div>
        )}
        {appStatus === AppStatus.CHECKOUT_PIZZA && (
          <CheckoutPage
            pizza={pizza}
            pizzaSizes={pizzaSizes}
            pizzaCrusts={pizzaCrusts}
            ingredients={ingredients}
            onBack={editPizza}
            onConfirm={confirmOrder}
          />
        )}
        {appStatus === AppStatus.ORDER_CONFIRMED && <ThankYouPage onRestart={editPizza} />}
        <AttributionFooter />
      </PageContainer>
    </ThemeProvider>
  );
};

export default connector(App);
