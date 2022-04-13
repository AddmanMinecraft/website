import { Text, Flex, Box, Link } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { HomeButton } from '../components/HomeButton';
import NextLink from 'next/link';

const Custom500: NextPage = () => {
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
					textAlign="center"
				>
					<Text fontSize="6xl" fontWeight="900" pb={5} lineHeight="120%" mb={25}>
						😵
					</Text>
					<Text fontSize="xl" fontWeight="regular" pb={5} wordBreak="break-word" maxWidth="50ch" mb={75}>
						Oh snap... something broke. Please tell us about it on{' '}
						<NextLink href="/discord" passHref>
							<Link
								textDecoration="underline"
								textDecorationColor="purple.600"
								_hover={{
									textDecorationColor: 'purple.500',
								}}
							>
								our Discord
							</Link>
						</NextLink>{' '}
						or try again. For now, you can head back to the home page.
					</Text>
					<HomeButton />
				</Flex>
			</Box>
		</>
	);
};

export default Custom500;
