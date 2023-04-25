import {Link} from 'react-router-dom';
import {useSinglePrismicDocument} from '@prismicio/react';
import {CTAWrapper, HomeWrapper} from './styled';
import {Box, Text, SmallHeading, Flex} from '../../shared';
import {theme} from '../../theme';

export default function Home() {
  const [ctaData] = useSinglePrismicDocument('home_cta');
  const imageUrl = ctaData?.data.image.url;
  const description = ctaData?.data.description;
  const CtaButton = () => {
    return(
      <Box 
        display={'flex'} 
        justifyContent={['center', 'center', 'start']} 
        ml={['', '', 4]}
      >
        <Link to={ctaData?.data.link.url}>
          <Text 
            fontSize={4}
            backgroundColor={theme.colors.primary}
            padding={4}
            textAlign={'center'}
          >
            {ctaData?.data.button}
          </Text>
        </Link>
      </Box>
    );
  };
  return (
    <HomeWrapper>
      <CTAWrapper>
        <Flex justifyContent={'center'}>
          <img src={imageUrl} />
        </Flex>
        <Box flex={'1 0 70%'}>
          <SmallHeading 
            textAlign={['center', 'center', 'initial']} 
            fontSize={[3, 2, 4]} 
            p={[4, 4, '']}
          >
            {description}
          </SmallHeading>
          <CtaButton />
        </Box>
      </CTAWrapper>
    </HomeWrapper>
  ); 
}
