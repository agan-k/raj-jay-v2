import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Box, Text} from '../shared';

export default function Footer({location}) {
  const currentYear = new Date().getFullYear();
  const isHome = Boolean(location === '/');
  const fontColor = isHome ? 'muted' : 'black';
  return (
    <div style={{position: 'absolute', bottom: '0', right: '0'}}>

      <Box display={'flex'}maxHeight={'100px'} p={4}>
        <Box color={fontColor} display={'flex'} justifyContent={'center'}>
        ©<span>{currentYear}</span>&nbsp;Rajiv Jayaweera&nbsp;
        </Box>
        <Box display={'flex'}>
          <Text color={fontColor}>site by &nbsp;</Text>
          <Link to={'https://formversuscontent.com'} target='_blank'>
            <Text color={'primary'}>FormVsContent</Text>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
Footer.propTypes = {
  location: PropTypes.string,
};
