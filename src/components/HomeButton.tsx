import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export const HomeButton = () => {
	return (
		<NextLink href="/" passHref>
			<Button mt={5} py={7} px={10} variant="main">
				Go Back
			</Button>
		</NextLink>
	);
};
