import {Nav} from '../components/nav';
import {MailingListForm} from '../components/forms';
import {Flex, Box} from '../shared';

export default function Header() {
  return (
    <Box>
      <Flex>
        <Flex alignItems={'center'}>RAJIV JAYAWEERA</Flex>
        <MailingListForm />
      </Flex>
      <Flex justifyContent={'end'}>
        <Nav />
      </Flex>

    </Box>
  );
}
