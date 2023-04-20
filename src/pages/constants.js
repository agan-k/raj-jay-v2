import {theme} from '../theme';

export const masonryBreakpoints = (defaultNumOfColumns) => {
  const breakpoints = theme.breakpoints?.map((element) => {
    return parseInt(element.replace('px', ''));
  });
  const Obj = {};
  breakpoints.map((breakpoint, index) => {
    Obj[breakpoint] = index === 0 ? 1 : index + 2;
  });
  Obj.default = defaultNumOfColumns;
  return Obj;
};
