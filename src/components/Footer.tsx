import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';
import { Logo } from './Logo';

export const Footer = () => (
	<Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }} maxW="container.lg" color="gray.300">
		<Stack spacing={{ base: '4', md: '5' }}>
			<Stack justify="space-between" direction="row" align="center">
				<Logo />
				<ButtonGroup variant="ghost">
					<IconButton as="a" href="/discord" aria-label="Discord" icon={<FaDiscord fontSize="1.25rem" />} />
					<IconButton
						as="a"
						href="https://twitter.com/ObserverBotMC"
						aria-label="Twitter"
						icon={<FaTwitter fontSize="1.25rem" />}
					/>
					<IconButton
						as="a"
						href="https://github.com/ObserverMC"
						aria-label="GitHub"
						icon={<FaGithub fontSize="1.25rem" />}
					/>
				</ButtonGroup>
			</Stack>
			<Text fontSize="sm" color="subtle">
				&copy; {new Date().getFullYear()} Observer. All rights reserved.
				<br />
				Website by Decassu, Evernote, & xMdb.
			</Text>
		</Stack>
	</Container>
);
