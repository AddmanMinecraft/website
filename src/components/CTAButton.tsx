import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

export const CTAButton = () => {
	return (
		<Button leftIcon={<FaTwitter />} bg="purple.600" _hover={{ background: 'purple.700' }}>
			Follow us on Twitter
		</Button>
	);
};
