import { NextPage } from 'next';
import { Flex, Text } from '@chakra-ui/react';

const Terms: NextPage = () => {
	return (
		<Flex justifyContent="center" alignItems="center" flexDirection="column" p={30} pt={125} textAlign="center">
			<Text fontSize="3xl" fontWeight="bold" pb={5}>
				Work in Progress
			</Text>
		</Flex>
	);
};

export default Terms;
