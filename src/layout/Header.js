import {Nav} from '../components/nav';
import {MailingListForm} from '../components/forms';
import {Flex} from '../shared';
import {HeaderWrapper} from './styled';

export default function Header() {
  return (
    <HeaderWrapper>
      <Flex>
        <Flex alignItems={'center'}>RAJIV JAYAWEERA</Flex>
        <MailingListForm />
      </Flex>
      <Flex justifyContent={'end'}>
        <Nav />
      </Flex>

    </HeaderWrapper>
  );
}
