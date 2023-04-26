import styled from 'styled-components';
import {Box} from './shared';
import banner from './assets/images/home-banner.jpg';
import {theme} from './theme';
import {mediaQuery} from './utils';

export const Wrapper = styled(Box)(
  {
    padding: theme.space[2],
    minHeight: '100vh',
    background: props => 
      (props.location === '/' ? 'black' : theme.colors.background),
    marginTop: props => 
      (props.location === '/' ? '0' : `${theme.space[6]}px`),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  mediaQuery({
    backgroundImage: [
      '',
      '',
      props => 
        (props.location === '/' ? `url('${banner}')` : ''),
    ],
  })
);
