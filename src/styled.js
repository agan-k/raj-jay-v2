import styled from 'styled-components';
import {Box} from './shared';
import banner from './assets/images/home-banner.jpg';
import {theme} from './theme';
import {mediaQuery} from './utils';

export const Wrapper = styled(Box)(
  {
    marginTop: theme.space[6],
    padding: '10px',
    minHeight: '100vh',
    background: props => 
      (props.location === '/' ? 'black' : theme.colors.background),
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
