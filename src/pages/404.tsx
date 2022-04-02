import { Text, Flex, Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { HomeButton } from '../components/HomeButton';

const Custom404: NextPage = () => {
	return (
		<>
			<Nav activeHref="none" />
			<Box height="90vh">
				<Flex
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					p={30}
					pt={150}
					textAlign="center">
					<Text fontSize="6xl" fontWeight="900" pb={5} lineHeight="120%" mb={25}>
						🤷‍♂️
					</Text>
					<Text fontSize="xl" fontWeight="regular" pb={5} wordBreak="break-word" maxWidth="50ch" mb={75}>
						You found a page... but it doesn't exist. Don't worry! You can always head back to the home
						page.
					</Text>
					<HomeButton />
				</Flex>
			</Box>
		</>
	);
};

export default Custom404;
