import { Text, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { HomeButton } from '../components/HomeButton';

const Custom500: NextPage = () => {
	return (
		<>
			<Nav activeHref="none" />
			<Flex justifyContent="center" alignItems="center" height="90vh" flexDirection="column">
				<Text fontWeight="semibold" fontSize="3xl" textAlign="center">
					Uh oh. Something went wrong on our end. Please try again.
				</Text>
				<HomeButton />
			</Flex>
		</>
	);
};

export default Custom500;
