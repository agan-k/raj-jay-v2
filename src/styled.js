import styled from 'styled-components';
import {Box} from './shared';
import banner from './assets/images/home-banner.jpg';
import {theme} from './theme';
import {mediaQuery} from './utils';

export const Wrapper = styled(Box)(
  {
    padding: '10px',
    minHeight: '100vh',
    background: props => 
      (props.location === '/' ? 'black' : theme.colors.background),
    backgroundImage: props => 
      (props.location === '/' ? `url('${banner}')` : ''),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  mediaQuery({
  })
);
