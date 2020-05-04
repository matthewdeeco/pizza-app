import { ThemeProvider } from 'emotion-theming';
import React, { useState } from 'react';

import { PizzaSizeButton } from './components/PizzaSizeButton';
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

const SelectSizeStepBody = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

function App() {
  const [pizzaSize, setPizzaSize] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <StepSection key="select-size">
          <StepHeading>Select the size of your pizza</StepHeading>
          <SelectSizeStepBody>
            <PizzaSizeButton
              name="Small"
              price={8}
              pizzaSize="60%"
              isSelected={pizzaSize === 'sm'}
              onClick={() => setPizzaSize('sm')}
            ></PizzaSizeButton>
            <PizzaSizeButton
              name="Medium"
              price={10}
              pizzaSize="80%"
              isSelected={pizzaSize === 'md'}
              onClick={() => setPizzaSize('md')}
            ></PizzaSizeButton>
            <PizzaSizeButton
              name="Large"
              price={12}
              pizzaSize="100%"
              isSelected={pizzaSize === 'lg'}
              onClick={() => setPizzaSize('lg')}
            ></PizzaSizeButton>
          </SelectSizeStepBody>
        </StepSection>
        {pizzaSize && (
          <StepSection key="select-crust">
            <StepHeading>What crust type do you like?</StepHeading>
            <SelectSizeStepBody>
              <PizzaSizeButton
                name="Thin"
                price={8}
                pizzaSize="60%"
                isSelected={pizzaSize === 'sm'}
                onClick={() => setPizzaSize('sm')}
              ></PizzaSizeButton>
              <PizzaSizeButton
                name="Thick"
                price={10}
                pizzaSize="80%"
                isSelected={pizzaSize === 'md'}
                onClick={() => setPizzaSize('md')}
              ></PizzaSizeButton>
            </SelectSizeStepBody>
          </StepSection>
        )}
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
