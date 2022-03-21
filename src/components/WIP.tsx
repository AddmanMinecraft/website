import { Text, Flex, Box } from '@chakra-ui/react';

export const WIP = () => {
	return (
		<Box height={['60vh', '90vh']}>
			<Flex justifyContent="center" alignItems="center" flexDirection="column" p={30} pt={250} textAlign="center">
				<Text fontSize="6xl" fontWeight="900" pb={5} lineHeight="120%" mb={25}>
					⚠️
				</Text>
				<Text fontSize="xl" fontWeight="regular" pb={5} wordBreak="break-word" maxWidth="50ch" mb={75}>
					This page is still a work in progress. Come back soon!
				</Text>
			</Flex>
		</Box>
	);
};
