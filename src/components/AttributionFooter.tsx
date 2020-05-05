import styled from '@emotion/styled';
import React from 'react';

const StyledFooter = styled.footer`
  font-size: 0.5rem;
  color: #fafafa;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  z-index: -1;
  a {
    text-decoration: none;
    color: unset;
    margin: 0 2px;
  }
`;

const AttributionFooter: React.FC<{}> = () => (
  <StyledFooter>
    <header>Attributions:</header>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
        Smashicons
      </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">
        turkkub
      </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/pause08" title="Pause08">
        Pause08
      </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/monkik" title="monkik">
        monkik
      </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  </StyledFooter>
);

export default AttributionFooter;
