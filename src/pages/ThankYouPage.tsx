import React from 'react';

import ActionButton from '../components/ActionButton';
import PageHeading from '../components/PageHeading';

const ThankYouPage: React.FC<{
  onRestart: () => void;
}> = ({ onRestart }) => {
  return (
    <section>
      <PageHeading>Thank you for your order! </PageHeading>
      P.S. Don&apos;t forget to interview Matthew Kendrick Co!
      <footer>
        <ActionButton onClick={onRestart}>Order another pizza</ActionButton>
      </footer>
    </section>
  );
};

export default ThankYouPage;
