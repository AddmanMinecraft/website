import { Box, Flex, Text, IconButton, Stack, Link, Collapse, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
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
					<Box flex={1} justifyContent="center" ml={5}>
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
							transition="all 0.25s ease-in-out"
							_hover={{
								color: 'purple.600',
								transition: 'all 0.25s ease-in-out',
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
							transition="all 0.25s ease-in-out"
							_hover={{
								color: 'purple.600',
								transition: 'all 0.25s ease-in-out',
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
	const { isOpen, onToggle } = useDisclosure();
	return (
		<>
			<Box minH="60px" py={30} px={[5, 10, 15]} textAlign="center" display={{ base: 'flex', md: 'none' }}>
				<NextLink href="/" passHref>
					<Box as="a">
						<Logo />
					</Box>
				</NextLink>
				<Flex display={{ base: 'flex', md: 'none' }} justifyContent="flex-end" flex={1}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
			</Box>
			<Collapse in={isOpen} animateOpacity>
				<Stack bg="gray.800" p={4}>
					{NavItems.map((navItem) => (
						<MobileNavItem key={navItem.label} {...navItem} />
					))}
				</Stack>
			</Collapse>
		</>
	);
};

const MobileNavItem = ({ label, href }: NavItem) => {
	const { onToggle } = useDisclosure();
	return (
		<Stack spacing={4} onClick={onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}>
				<Text fontWeight="semibold" color="gray.200">
					{label}
				</Text>
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
