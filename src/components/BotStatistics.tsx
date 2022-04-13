import { Box, SimpleGrid, VStack, Text, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaCode, FaServer, FaUser, FaUserCheck } from 'react-icons/fa';

export interface BotStatsTypes {
	observerData: {
		stats: {
			commandsExecuted: number;
			trackedPlayers: number;
			verifiedUsers: number;
		};
	};
	topGGData: {
		server_count: number | string;
	};
}

export const BotStatistics = ({ observerData, topGGData }: BotStatsTypes) => {
	return (
		<Box height={['850px', '900px', '480px']} background="gray.800">
			<SimpleGrid columns={[2, null, 0]} display={['block', null, null, null, null, 'grid']}>
				<VStack
					w="full"
					h="full"
					py={[2, 4, 6, 8]}
					ml={[0, null, null, 50]}
					pl={[0, null, null, 160]}
					align={['center', null, null, 'flex-start']}
					textAlign={['center', null, null, 'left']}
				>
					<Text
						fontSize={['3xl', '4xl', '5xl', '6xl']}
						fontWeight="semibold"
						pb={5}
						mb={25}
						mt={[50, null, 25]}
					>
						Trusted by everyone.
					</Text>
					<SimpleGrid columns={[2, null, 0]} spacing={10} spacingX="200px" display={['block', null, 'grid']}>
						<Stat
							statistic={
								topGGData.server_count === '1' ? topGGData.server_count.toLocaleString() : '13,000+'
							}
							icon={FaServer}
							description="Servers"
						/>
						<Stat
							statistic={observerData.stats.verifiedUsers.toLocaleString()}
							icon={FaUserCheck}
							description="Verified Users"
						/>
						<Stat
							statistic={observerData.stats.trackedPlayers.toLocaleString()}
							icon={FaUser}
							description="Tracked Players"
						/>
						<Stat
							statistic={observerData.stats.commandsExecuted.toLocaleString()}
							icon={FaCode}
							description="Commands Executed"
						/>
					</SimpleGrid>
				</VStack>
				{/* <VStack
					w="full"
					h="full"
					ml={30}
					mt="-25px"
					align="flex-end"
					justifyContent="center"
					textAlign="center"
					alignContent="center"
					alignItems="center"
					display={['flex', 'grid']}>
					<Image src="premium.svg" alt="Observer Premium" width="50%" py={10}></Image>
					<Text mt={1} fontWeight="light">
						Support us with
					</Text>
					<Text fontSize="xl" fontWeight="medium" alignItems="center">
						Observer Premium
					</Text>
				</VStack> */}
			</SimpleGrid>
		</Box>
	);
};

interface StatProps {
	statistic: string;
	icon: IconType;
	description: string;
}

const Stat = ({ statistic, icon, description }: StatProps) => {
	return (
		<Box>
			<Text fontSize={['2xl', '3xl', '4xl']} fontWeight="medium">
				{statistic}
			</Text>
			<Text fontSize={['lg', 'xl', '2xl']} fontWeight="light" color="gray.400" mb={[10, null, 0]}>
				<Icon as={icon} size="2x" mr={2} /> {description}
			</Text>
		</Box>
	);
};
