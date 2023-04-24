import {Link} from 'react-router-dom';
import {useSinglePrismicDocument} from '@prismicio/react';
import {CTAWrapper, HomeWrapper} from './styled';
import {Box, Text, Flex, SmallHeading} from '../../shared';
import {theme} from '../../theme';

export default function Home() {
  const [ctaData] = useSinglePrismicDocument('home_cta');
  const imageUrl = ctaData?.data.image.url;
  const description = ctaData?.data.description;
  const CtaButton = () => {
    return(
      <Link to={ctaData?.data.link.url}>
        <Text 
          fontSize={theme.fontSizes[4]}
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
        <Flex>
          <Box flex={'1 0 40%'}>
            <img src={imageUrl} />
          </Box>
          <Box flex={'1 0 60%'}>
            <SmallHeading>{description}</SmallHeading>
            <CtaButton />
          </Box>
        </Flex>
      </CTAWrapper>
    </HomeWrapper>
  ); 
}
