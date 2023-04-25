import styled from 'styled-components';
import {
  space, 
  layout, 
  color, 
  flexbox, 
  typography, 
  border,
  position,
} from 'styled-system';

const Box = styled('div')(
  space,
  layout,
  color,
  flexbox,
  typography,
  border,
  position
);
export default Box;
