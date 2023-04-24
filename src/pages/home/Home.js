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
      <Text 
        fontSize={theme.fontSizes[4]}
        backgroundColor={theme.colors.primary}
        padding={4}
        textAlign={'center'}
      >
        {ctaData?.data.button}
      </Text>
    );
  };
  return (
    <HomeWrapper>
      <CTAWrapper>
        <Flex>
          <Box flex={'1 0 40%'}>
            <img src={imageUrl} />
          </Box>
          <Box flex={'1 0 40%'}>
            <SmallHeading>{description}</SmallHeading>
            <CtaButton/>
          </Box>
        </Flex>
      </CTAWrapper>
    </HomeWrapper>
  ); 
}
