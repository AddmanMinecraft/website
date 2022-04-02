import { Text, Flex, Button, Box, SimpleGrid, Image, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Hero = () => {
	return (
		<Box height="70vh">
			<SimpleGrid columns={[2, null, 0]} mt={100}>
				<VStack w="full" h="full" py={[2, 4, 6, 8]} ml={50} px={[50, 130, 160]} align="flex-start">
					<Text fontSize="7xl" fontWeight="900" pb={5} lineHeight="130%" mb={25}>
						Hypixel Statistics
						<br />
						<span className="textGradient">Redefined</span>
					</Text>
					<Text
						fontSize={['lg', 'xl']}
						fontWeight="regular"
						pb="80px"
						wordBreak="break-word"
						maxWidth="65ch"
						lineHeight="160%">
						An innovative Hypixel stats bot that allows users to view their daily and weekly BedWars,
						SkyWars, and Duels statistics.
					</Text>

					<Flex flexDirection="row">
						<NextLink href="/invite" passHref>
							<Button variant="main" px={['10px', '30px']} py="15px" mr={10}>
								Add Observer
							</Button>
						</NextLink>
						<NextLink href="/about" passHref>
							<Button variant="secondary" px={['3ch', '50px']} py="15px">
								Learn More
							</Button>
						</NextLink>
					</Flex>
				</VStack>
				<VStack w="full" h="full" py={[2, 4, 6, 8]} pl={200} spacing={6} align="flex-start">
					<Image src="/mascot.svg" alt="Observer Mascot" width="100%"></Image>
				</VStack>
			</SimpleGrid>
		</Box>
	);
};
