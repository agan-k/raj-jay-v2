import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Box, Text} from '../shared';

export default function Footer({location}) {
  const currentYear = new Date().getFullYear();
  const isHome = Boolean(location === '/');
  const fontColor = isHome ? 'muted' : 'black';
  return (
    <Box mt={5} pt={3} borderTop={'1px solid grey'}>
      <Box color={fontColor} display={'flex'} justifyContent={'center'}>
        ©<span>{currentYear}</span>&nbsp;Rajiv Jayaweera
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Text color={fontColor}>site by &nbsp;</Text>
        <Link to={'https://formversuscontent.com'} target='_blank'>
          <Text color={'primary'}>FormVsContent</Text>
        </Link>
      </Box>
    </Box>
  );
}
Footer.propTypes = {
  location: PropTypes.string,
};
