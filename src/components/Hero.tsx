import { Text, Flex, Button, Box, SimpleGrid, Image, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Hero = () => {
	return (
		<Box height="70vh">
			<SimpleGrid columns={[2, null, 0]} mt={[10, 100]} display={['block', 'grid']}>
				<VStack
					w="full"
					h="full"
					py={[2, 4, 6, 8]}
					ml={[0, 50]}
					pl={[5, 130, 150]}
					align={['center', 'flex-start']}
					textAlign={['center', 'left']}>
					<Text fontSize={['5xl', '7xl']} fontWeight="900" pb={5} lineHeight="130%" mb={25}>
						Hypixel Statistics
						<br />
						<span className="textGradient">Redefined</span>
					</Text>
					<Text
						fontSize={['md', 'xl']}
						fontWeight="regular"
						pb="80px"
						wordBreak="break-word"
						maxWidth="50ch"
						lineHeight="160%">
						Observer is an innovative Hypixel stats bot that features historical statistics, leaderboards,
						rankings, graphs and much more!
					</Text>

					<Flex flexDirection="row">
						<NextLink href="/invite" passHref>
							<Button variant="main" px={['10px', '30px']} py="15px" mr={10}>
								Add Observer
							</Button>
						</NextLink>
						<NextLink href="/about" passHref>
							<Button variant="secondary" px={['10px', '40px']} py="15px">
								Learn More
							</Button>
						</NextLink>
					</Flex>
				</VStack>
				<VStack
					w="full"
					h="full"
					py={[2, 4, 6, 8]}
					pl={200}
					spacing={6}
					align="flex-start"
					display={['none', 'grid']}>
					<Image src="/mascot.svg" alt="Observer Mascot" width="100%"></Image>
				</VStack>
			</SimpleGrid>
		</Box>
	);
};
