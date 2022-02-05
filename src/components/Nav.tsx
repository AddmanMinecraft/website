import { Box, Flex, Button, Stack } from '@chakra-ui/react';

export const Nav = () => {
	return (
		<Box>
			<Flex
				color="white"
				minH="60px"
				py={2}
				px={[10, 130, 196]}
				borderBottom={1}
				borderStyle="solid"
				borderColor="gray.700"
				align="center">
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}></Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src="/logo.svg" alt="Observer" width={45} height={45} />
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
					<Button colorScheme="purple" variant="outline">
						Login
					</Button>
				</Stack>
			</Flex>
		</Box>
	);
};

const DesktopNav = () => {
	return (
		<Stack direction={'row'} spacing={4}>
			{/* {NavItems.map((navItem) => (
				<Box key={navItem.label}>
					<Link
						p={5}
						href={navItem.href ?? '#'}
						fontSize="sm"
						fontWeight="bold"
						color="white"
						_hover={{
							color: 'purple.600',
						}}>
						{navItem.label}
					</Link>
				</Box>
			))} */}
		</Stack>
	);
};

// interface NavItem {
// 	label: string;
// 	href?: string;
// }

// const NavItems: Array<NavItem> = [
// 	{
// 		label: 'Features',
// 		href: '#',
// 	},
// 	{
// 		label: 'About',
// 		href: '#',
// 	},
// ];
