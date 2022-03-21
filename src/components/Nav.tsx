import { Box, Flex, Text, IconButton, Stack, Link, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import NextLink from 'next/link';

export const Nav = ({ activeHref }: NavProps) => {
	return (
		<Box height="10vh">
			<Box minH="60px" py={30} px={[5, 25, 50]} textAlign="center" display={{ base: 'none', md: 'flex' }}>
				<Flex justifyContent="flex-start" flex={1}>
					<DesktopNav activeHref={activeHref} />
				</Flex>
				<NextLink href="/" passHref>
					<Box flex={1} justifyContent="center" ml={5} as="a">
						<Logo />
					</Box>
				</NextLink>
				<Box justifyContent="flex-end" display="inline-flex">
					<NextLink href="/login" passHref>
						<Box
							as="a"
							p={2}
							m={1.5}
							fontSize="sm"
							color={activeHref === '/login' ? 'white' : 'gray.300'}
							_hover={{
								color: 'blue.200',
							}}>
							Login
						</Box>
					</NextLink>
				</Box>
			</Box>
			<MobileNav />
		</Box>
	);
};

const DesktopNav = ({ activeHref }: NavProps) => {
	return (
		<Box display="inline-flex">
			{NavItems.map(({ label, href }) => (
				<Box key={label} mt={3}>
					<NextLink href={href ?? '#'} passHref>
						<Box
							as="a"
							p={2}
							m={5}
							fontSize="sm"
							color={activeHref === href ? 'white' : 'gray.300'}
							_hover={{
								color: 'blue.200',
							}}>
							{label}
						</Box>
					</NextLink>
				</Box>
			))}
		</Box>
	);
};
const MobileNav = () => {
	const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
	const [hidden, setHidden] = useState(!isOpen);
	return (
		<>
			<motion.div
				{...getDisclosureProps()}
				hidden={hidden}
				initial={false}
				onAnimationStart={() => setHidden(false)}
				onAnimationComplete={() => setHidden(!isOpen)}
				animate={{ width: isOpen ? 300 : 0 }}
				style={{
					background: '#353535',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					position: 'fixed',
					zIndex: '2',
					right: '0',
					height: '100vh',
					top: '0',
				}}>
				<Stack justify="center" alignItems="center" align="center" my="25vh">
					{NavItems.map((navItem) => (
						<MobileNavItem key={navItem.label} {...navItem} />
					))}
				</Stack>
			</motion.div>
			<Box minH="60px" py={30} px={[5, 10, 15]} textAlign="center" display={{ base: 'flex', md: 'none' }}>
				<Logo />
				<Flex display={{ base: 'flex', md: 'none' }} justifyContent="flex-end" flex={1}>
					<IconButton
						{...getButtonProps()}
						display="inline-flex"
						color="purple.700"
						zIndex={3}
						icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={8} h={8} />}
						variant="ghost"
						aria-label="Toggle Navigation"
					/>
				</Flex>
			</Box>
		</>
	);
};

const MobileNavItem = ({ label, href }: NavItem) => {
	return (
		<Stack align="center">
			<Flex
				p={2}
				m={0.5}
				as={Link}
				href={href ?? '#'}
				justify="space-between"
				_hover={{
					color: 'purple.700',
					textDecoration: 'none',
				}}>
				<Text fontSize="2xl">{label}</Text>
			</Flex>
		</Stack>
	);
};

interface NavItem {
	label: string;
	href: string;
}

interface NavProps {
	activeHref:
		| '/'
		| '/about'
		| '/commands'
		| '/commands'
		| '/leaderboards'
		| '/stats'
		| '/login'
		| '/privacy'
		| '/terms'
		| 'none';
}

const NavItems: Array<NavItem> = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Commands',
		href: '/commands',
	},
	{
		label: 'Leaderboards',
		href: '/leaderboards',
	},
	{
		label: 'Stats',
		href: '/stats',
	},
];
