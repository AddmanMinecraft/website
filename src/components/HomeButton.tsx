import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export const HomeButton = () => {
	return (
		<NextLink href="/" passHref>
			<Button mt="10" bg="purple.600" fontWeight="bold" _hover={{ background: 'purple.700' }}>
				Go Back
			</Button>
		</NextLink>
	);
};
