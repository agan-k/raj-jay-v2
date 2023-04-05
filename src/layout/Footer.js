import {Link} from 'react-router-dom';
import {Box, Text} from '../shared';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        ©<span>{currentYear}</span>&nbsp;Dominique Carre
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Text color={'lightGray'}>site by &nbsp;</Text>
        <Link to={'https://formversuscontent.com'} target='_blank'>
          <Text color={'primary'}>FormVsContent</Text>
        </Link>
      </Box>
    </>
  );
}

