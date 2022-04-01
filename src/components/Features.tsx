import { Flex, Box, Image } from '@chakra-ui/react';

export const Features = () => {
	return (
		<Box height="70vh">
			<Flex justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
				<Image src="/observer.png" alt="Observer Example" my={['0', '-20vh']} />
			</Flex>
		</Box>
	);
};
