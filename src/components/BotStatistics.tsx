import { Box, SimpleGrid, VStack, Text, Image } from '@chakra-ui/react';
import { FaCode, FaServer, FaUser, FaUserCheck } from 'react-icons/fa';
import { separateWithCommas } from '../utils';

export interface BotStatsTypes {
	observerData: {
		stats: {
			commandsExecuted: number;
			trackedPlayers: number;
			verifiedUsers: number;
		};
	};
	statcordData: {
		data: {
			0: {
				servers: number;
				users: number;
			};
		};
	};
}

export const BotStatistics = ({ observerData, statcordData }: BotStatsTypes) => {
	return (
		<Box height="50vh" background="gray.800">
			<SimpleGrid columns={[2, null, 0]}>
				<VStack w="full" h="full" py={[2, 4, 6, 8]} ml={50} pl={[50, 130, 160]} align="flex-start">
					<Text fontSize="6xl" fontWeight="semibold" pb={5} mb={25} mt={25}>
						Trusted by everyone.
					</Text>
					<SimpleGrid columns={2} spacing={10} spacingX="200px">
						<Box>
							<Text fontSize="4xl" fontWeight="medium">
								{separateWithCommas(statcordData.data[0].servers)}
							</Text>
							<Text fontSize="xl" fontWeight="medium" color="gray.400" display="flex" alignItems="center">
								<Box pr={2}>
									<FaServer />
								</Box>{' '}
								Servers
							</Text>
						</Box>
						<Box>
							<Text fontSize="4xl" fontWeight="medium">
								{separateWithCommas(observerData.stats.verifiedUsers)}
							</Text>
							<Text fontSize="xl" fontWeight="medium" color="gray.400" display="flex" alignItems="center">
								<Box pr={2}>
									<FaUserCheck />
								</Box>{' '}
								Verified Users
							</Text>
						</Box>

						<Box>
							<Text fontSize="4xl" fontWeight="medium">
								{separateWithCommas(observerData.stats.trackedPlayers)}
							</Text>
							<Text fontSize="xl" fontWeight="medium" color="gray.400" display="flex" alignItems="center">
								<Box pr={2}>
									<FaUser />
								</Box>{' '}
								Tracked Players
							</Text>
						</Box>
						<Box>
							<Text fontSize="4xl" fontWeight="medium">
								{separateWithCommas(observerData.stats.commandsExecuted)}
							</Text>
							<Text fontSize="xl" fontWeight="medium" color="gray.400" display="flex" alignItems="center">
								<Box pr={2}>
									<FaCode />
								</Box>{' '}
								Commands Executed
							</Text>
						</Box>
					</SimpleGrid>
				</VStack>
				<VStack
					w="full"
					h="full"
					ml={30}
					mt="-25px"
					align="flex-end"
					display="flex"
					justifyContent="center"
					textAlign="center"
					alignContent="center"
					alignItems="center">
					<Image src="premium.svg" alt="Observer Premium" width="50%" py={10}></Image>
					<Text mt={1} fontWeight="light">
						Support us with
					</Text>
					<Text fontSize="xl" fontWeight="medium" alignItems="center">
						Observer Premium
					</Text>
				</VStack>
			</SimpleGrid>
		</Box>
	);
};
