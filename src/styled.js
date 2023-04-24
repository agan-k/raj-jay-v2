import styled from 'styled-components';
import {Box} from './shared';
import banner from './assets/images/home-banner.jpg';
import {theme} from './theme';

export const Wrapper = styled(Box)(
  {
    minHeight: '100vh',
    padding: '10px',
    background: props => 
      (props.location === '/' ? 'black' : theme.colors.background),
    backgroundImage: props => 
      (props.location === '/' ? `url('${banner}')` : ''),
    backgroundSize: 'cover',
    // backgroundPosition: '0 -180px',
    backgroundRepeat: 'no-repeat',
  }
);
