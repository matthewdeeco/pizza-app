import React from 'react';

import PageHeading from "../components/PageHeading";
import styled from '../styled';

const BackButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.gunmetal};
  padding: 1rem;
  margin: 1rem;
  font-size: 1.25rem;
  background-color: ${(props) => props.theme.colors.androidGreen}aa;
  &:focus,
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.androidGreen};
    cursor: pointer;
  }
`;

const ThankYouPage: React.FC<{
  onRestart: () => void;
}> = ({ onRestart }) => {
  return (
    <section>
      <PageHeading>Thank you for your order! </PageHeading>
      P.S. Don&apos;t forget to interview Matthew Kendrick Co!
      <footer>
        <BackButton onClick={onRestart}>Order another pizza</BackButton>
      </footer>
    </section>
  );
}

export default ThankYouPage;
