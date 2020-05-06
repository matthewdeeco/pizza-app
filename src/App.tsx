import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';

import AttributionFooter from './components/AttributionFooter';
import { AppStatus } from './models/app-status';
import { Pizza } from './models/pizza';
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
    pizzaSizes: state.pizzaSizes,
    pizzaCrusts: state.pizzaCrusts,
    pizzaToppings: state.pizzaToppings,
  };
}

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type AppProps = PropsFromRedux & {};

const App: React.FC<AppProps> = ({ pizza, appStatus, pizzaSizes, pizzaCrusts, pizzaToppings }) => {
  const dispatch = useDispatch();

  const checkoutPizza = (pizza: Pizza) => {
    dispatch(actions.checkoutPizza(pizza));
  };

  const confirmOrder = () => {
    dispatch(actions.confirmOrder());
  };

  const editPizza = () => {
    dispatch(actions.editPizza());
  };

  const createPizza = () => {
    dispatch(actions.createPizza());
  };

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        {appStatus === AppStatus.CREATE_PIZZA && (
          <CreatePizzaPage
            pizza={pizza}
            pizzaSizes={pizzaSizes}
            pizzaCrusts={pizzaCrusts}
            ingredients={pizzaToppings.ingredients}
            maxFreeToppings={pizzaToppings.maxFreeToppings}
            pricePerTopping={pizzaToppings.pricePerTopping}
            onCheckout={checkoutPizza}
          />
        )}
        {appStatus === AppStatus.CHECKOUT_PIZZA && (
          <CheckoutPage
            pizza={pizza}
            pizzaSizes={pizzaSizes}
            pizzaCrusts={pizzaCrusts}
            ingredients={pizzaToppings.ingredients}
            onBack={editPizza}
            onConfirm={confirmOrder}
          />
        )}
        {appStatus === AppStatus.ORDER_CONFIRMED && <ThankYouPage onRestart={createPizza} />}
        <AttributionFooter />
      </PageContainer>
    </ThemeProvider>
  );
};

export default connector(App);
