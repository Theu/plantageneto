import React from 'react';
import { Wrapper } from './HomePage.styles';

export const _HomePage = () => <Wrapper>This is homepage</Wrapper>

export const Homepage = React.memo(_HomePage);