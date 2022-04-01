import { Text, Flex, Button, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaDiscord } from 'react-icons/fa';

export const Hero = () => {
	return (
		<Box height="90vh">
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				p={30}
				pt={[100, 150]}
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
					An innovative Hypixel stats bot that allows users to view their daily and weekly BedWars, SkyWars,
					and Duels statistics.
				</Text>
				<Flex flexDirection="row">
					<NextLink href="/invite" passHref>
						<Button variant="main" leftIcon={<FaDiscord />} px={['10px', '25px']} py="25px" mx={5}>
							Add Observer!
						</Button>
					</NextLink>
					<NextLink href="/about" passHref>
						<Button variant="secondary" px={['3ch', '50px']} py="25px" mx={5}>
							Learn More
						</Button>
					</NextLink>
				</Flex>
			</Flex>
		</Box>
	);
};
