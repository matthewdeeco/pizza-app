import { ThemeProvider } from 'emotion-theming';
import React, { useState } from 'react';

import PizzaCrustOption from './components/PizzaCrustOption';
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
  const [pizzaSize, setPizzaSize] = useState(null as null | 'sm' | 'md' | 'lg');
  const [pizzaCrust, setPizzaCrust] = useState(null as null | 'thin' | 'thick');

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <StepSection key="select-size">
          <StepHeading>Select the size of your pizza</StepHeading>
          <SelectSizeStepBody>
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
          </SelectSizeStepBody>
        </StepSection>

        {pizzaSize && (
          <StepSection key="select-crust">
            <StepHeading>What crust type do you like?</StepHeading>
            <SelectSizeStepBody>
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
            </SelectSizeStepBody>
          </StepSection>
        )}
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
