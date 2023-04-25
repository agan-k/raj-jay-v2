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
      <Link to={ctaData?.data.link.url}>
        <Text 
          width={1/3}
          margin={'10px auto'}
          fontSize={4}
          backgroundColor={theme.colors.primary}
          padding={4}
          textAlign={'center'}
        >
          {ctaData?.data.button}
        </Text>
      </Link>
    );
  };
  return (
    <HomeWrapper>
      <CTAWrapper>
        <Flex justifyContent={'center'} flex={'2 0 30%'}>
          <img src={imageUrl} />
        </Flex>
        <Box flex={'1 0 70%'}>
          <SmallHeading fontSize>{description}</SmallHeading>
          <CtaButton />
        </Box>
      </CTAWrapper>
    </HomeWrapper>
  ); 
}
