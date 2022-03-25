import { Text, Flex, Button, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Hero = () => {
	return (
		<Box height="90vh">
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				p={30}
				pt={[100, 150, 200]}
				textAlign="center">
				<Text fontSize="6xl" fontWeight="900" pb={5} lineHeight="120%" mb={25}>
					Hypixel Statistics
					<br />
					<span className="textGradient">Redefined</span>
				</Text>
				<Text
					fontSize={['lg', 'xl']}
					fontWeight="regular"
					pb={5}
					wordBreak="break-word"
					maxWidth="50ch"
					mb={75}>
					A unique Hypixel stats bot that allows users to view their daily and weekly BedWars, SkyWars, and
					Duels statistics.
				</Text>
				<Flex flexDirection="row">
					<NextLink href="/invite" passHref>
						<Button variant="main" px="40px" mx={5}>
							Invite Me
						</Button>
					</NextLink>
					<NextLink href="/about" passHref>
						<Button variant="secondary" px="35px" mx={5}>
							Learn More
						</Button>
					</NextLink>
				</Flex>
			</Flex>
		</Box>
	);
};
