import { Text, Link, Flex } from '@chakra-ui/react';
import { CTAButton } from '../components/CTAButton';

export const Hero = () => {
	return (
		<>
			<Flex justifyContent="center" alignItems="center" flexDirection="column" p={30} pt={125} textAlign="center">
				<Text fontSize="3xl" fontWeight="bold" pb={5}>
					Welcome to Observer! Website is currently WIP.
				</Text>
				<Link href="https://twitter.com/observerbotmc" isExternal>
					<CTAButton />
				</Link>
			</Flex>
		</>
	);
};