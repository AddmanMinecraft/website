import { Text, Flex, Button, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Hero = () => {
	return (
		<Box height='90vh'>
			<Flex justifyContent="center" alignItems="center" flexDirection="column" p={30} pt={150} textAlign="center">
				<Text fontSize="6xl" fontWeight="900" pb={5} lineHeight="120%" mb={25}>
					Hypixel Statistics
					<br />
					<span className="textGradient">Redefined</span>
				</Text>
				<Text fontSize="xl" fontWeight="regular" pb={5} wordBreak="break-word" maxWidth="50ch" mb={75}>
					A unique Hypixel stats bot that allows users to view their daily and weekly BedWars, SkyWars, and
					Duels statistics.
				</Text>
				<Box>
					<NextLink href="/invite">
						<Button variant="main" px="40px" mx={10}>
							Invite Me
						</Button>
					</NextLink>
					<NextLink href="/about">
						<Button variant="secondary" px="40px" mx={10}>
							Learn More
						</Button>
					</NextLink>
				</Box>
			</Flex>
		</Box>
	);
};
