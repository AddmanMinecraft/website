import { Text, Flex, Button, Box, SimpleGrid, Image, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Hero = () => {
	return (
		<Box height="650px">
			<SimpleGrid columns={[2, null, 0]} mt={[10, null, 100]} display={['block', null, 'grid']}>
				<VStack
					w="full"
					h="full"
					py={[2, 4, 6, 8]}
					ml={[0, null, 10, 20, 50]}
					pl={[5, null, 30, 50, 150]}
					align={['center', null, 'flex-start']}
					textAlign={['center', null, 'left']}
					// backgroundColor="rgba(255, 0, 0, 0.4)"
					// eslint-disable-next-line quotes
					bg={[`url('/greyMascot.svg') left no-repeat`, null, 'none']}
				>
					<Text fontSize={['5xl', null, '7xl']} fontWeight="900" pb={5} lineHeight="130%" mb={25}>
						Hypixel Statistics
						<br />
						<span className="textGradient">Redefined</span>
					</Text>
					<Text
						fontSize={['md', null, 'xl']}
						fontWeight="regular"
						pb="80px"
						wordBreak="break-word"
						maxWidth="50ch"
						lineHeight="160%"
					>
						Observer is an innovative Hypixel stats bot that features historical statistics, leaderboards,
						rankings, graphs and much more!
					</Text>
					<Flex flexDirection="row">
						<NextLink href="/invite" passHref>
							<Button variant="main" px={['10px', null, '30px']} py="15px" mr={10}>
								Add Observer
							</Button>
						</NextLink>
						<NextLink href="/about" passHref>
							<Button variant="secondary" px={['10px', null, '40px']} py="15px">
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
					display={['none', null, 'grid']}
				>
					<Image src="/mascot.svg" alt="Observer Mascot" width="100%"></Image>
				</VStack>
			</SimpleGrid>
		</Box>
	);
};
