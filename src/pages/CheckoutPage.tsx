import React from 'react';

import ActionButton from '../components/ActionButton';
import PageHeading from '../components/PageHeading';
import { Pizza, PizzaSize, PizzaCrust, PizzaIngredient } from '../models/pizza';
import styled from '../styled';
import theme from '../theme';

const PageTitle = styled.header`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.gunmetal};
  margin-bottom: 0.5rem;
`;

const OrderDetail = styled.span`
  color: ${(props) => props.theme.colors.pumpkin};
`;

const StepBody = styled.ul`
  padding: 0;
  list-style-type: none;
  li {
    display: inline-block;
    padding: 0.5rem;
    margin: 0.25rem;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.gunmetal};
  }
`;

const PizzaIngredientImage = styled.img`
  width: 2rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.25rem;
`;

const ActionsFooter = styled.footer`
  display: flex;
  justify-content: center;
`;

const CheckoutPage: React.FC<{
  pizza: Pizza;
  pizzaSizes: Record<PizzaSize['id'], PizzaSize>;
  pizzaCrusts: Record<PizzaCrust['id'], PizzaCrust>;
  ingredients: Record<PizzaIngredient['id'], PizzaIngredient>;
  onBack: () => void;
  onConfirm: () => void;
}> = ({ pizza, pizzaSizes, pizzaCrusts, ingredients, onBack, onConfirm }) => {
  return (
    <div>
      <PageTitle>Confirm your order</PageTitle>
      <PageHeading>
        You have selected a{' '}
        <OrderDetail>
          {pizzaSizes[pizza.size].name.toLowerCase()} {pizzaCrusts[pizza.crust].name.toLowerCase()}
          -crust pizza
        </OrderDetail>{' '}
        with {pizza.ingredients.length > 0 ? 'these toppings:' : 'no toppings.'}
      </PageHeading>
      <StepBody>
        {pizza.ingredients.map((ingredientId) => (
          <li key={ingredientId}>
            <PizzaIngredientImage src={ingredients[ingredientId].imageUrl}></PizzaIngredientImage>
            {ingredients[ingredientId].name}
          </li>
        ))}
      </StepBody>
      <PageHeading>
        The total is{' '}
        <OrderDetail>
          $
          {(
            pizzaSizes[pizza.size].price +
            pizzaCrusts[pizza.crust].price +
            Math.max(0, pizza.ingredients.length - 3) * 0.5
          ).toFixed(2)}
        </OrderDetail>
        .
      </PageHeading>
      <ActionsFooter>
        <ActionButton backgroundColor={theme.colors.flame} onClick={onBack}>
          Back
        </ActionButton>
        <ActionButton onClick={onConfirm}>Place order</ActionButton>
      </ActionsFooter>
    </div>
  );
};

export default CheckoutPage;
