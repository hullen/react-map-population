import React from 'react';
import { Main } from 'components/Layout';
import { ReactComponent as IconProperty } from 'assets/icons/property-icon.svg';
import { StyledHome } from './styled';

export default function Home() {
  return (
    <Main>
      <StyledHome>
        <h2>City Population</h2>
        <IconProperty className="icon-property" />
      </StyledHome>
    </Main>
  );
}
