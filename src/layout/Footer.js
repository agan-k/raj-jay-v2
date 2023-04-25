import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Box, Text} from '../shared';
import {FooterWrapper} from './styled';

export default function Footer({location}) {
  const currentYear = new Date().getFullYear();
  const isHome = Boolean(location === '/');
  const fontColor = isHome ? 'muted' : 'black';
  return (
    <FooterWrapper>
      <Box color={fontColor} display={'flex'} justifyContent={'center'}>
        ©<span>{currentYear}</span>&nbsp;Rajiv Jayaweera&nbsp;
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Text color={fontColor}>site by &nbsp;</Text>
        <Link to={'https://formversuscontent.com'} target='_blank'>
          <Text color={'primary'}>FormVsContent</Text>
        </Link>
      </Box>
    </FooterWrapper>
  );
}
Footer.propTypes = {
  location: PropTypes.string,
};
