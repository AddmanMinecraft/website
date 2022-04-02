import { Flex, Box, Image, Text } from '@chakra-ui/react';

export const Features = () => {
	return (
		<Box height="150vh">
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				textAlign="center"
				position="relative"
				width="100%"
				height="30vh"
				_before={{
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					height: '100%',
					width: '100%',
					background: 'purple.600',
					borderRadius: '0 0 50% 50%/0 0 100% 100%',
					transform: 'scaleX(1.5) rotate(180deg)',
				}}></Flex>
			<Flex background="purple.600" px="20vw" flexDirection="column">
				<Text fontSize="6xl" fontWeight="800" mb={25}>
					Show-off while looking good.
				</Text>
				<Text fontSize="xl" fontWeight="500" pb={5} mb={25}>
					Brag about your stats with Observer's cutting edge designs.
				</Text>
				<Image src='observer.png' alt="Observer Design" width="50%" py={10}></Image>
			</Flex>
		</Box>
	);
};
