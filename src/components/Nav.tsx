import { Box, Flex, Text, IconButton, Stack, Link, Collapse, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { FaDollarSign } from 'react-icons/fa';
import { Wordmark } from './Wordmark';
import { Logo } from './Logo';
import NextLink from 'next/link';

export const Nav = ({ activeHref }: NavProps) => {
	return (
		<Box height="95px">
			<Box
				py={[0, 30]}
				px={[5, 10, 25, 50, 75, 100, 200]}
				minH="60px"
				textAlign="center"
				display={{ base: 'none', md: 'flex' }}
			>
				<NextLink href="/" passHref>
					<Box>
						<Wordmark />
					</Box>
				</NextLink>

				<Flex justifyContent="center" textAlign="center" alignContent="center" flex={1}>
					<DesktopNav activeHref={activeHref} />
				</Flex>

				<Box justifyContent="flex-end" alignItems="center">
					{/* <NextLink href="/premium" passHref>
					<Button variant="main" leftIcon={<FaDollarSign />} px="25px">
						Go Premium
					</Button>
					</NextLink> */}

					<NextLink href="/login" passHref>
						<Box
							as="a"
							ml="5ch"
							fontSize="sm"
							color={activeHref === '/login' ? 'white' : 'gray.300'}
							transition="all 0.25s ease-in-out"
							_hover={{
								color: 'purple.600',
								transition: 'all 0.25s ease-in-out',
							}}
						>
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
		<>
			{NavItems.map(({ label, href }) => (
				<Box key={label} mt={3}>
					<NextLink href={href ?? '#'} passHref>
						<Box
							as="a"
							m={[0, '1ch', '1.5ch', '2ch', '2.5ch', '3ch', '4ch']}
							p={[0, null, '1ch']}
							fontSize="sm"
							color={activeHref === href ? 'white' : 'gray.300'}
							transition="all 0.25s ease-in-out"
							_hover={{
								color: 'purple.600',
								transition: 'all 0.25s ease-in-out',
							}}
						>
							{label}
						</Box>
					</NextLink>
				</Box>
			))}
		</>
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
				<Stack bg="gray.800" p={4} position="relative">
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
				}}
			>
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
