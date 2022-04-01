import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { WIP } from '../components/WIP';
import { Footer } from '../components/Footer';

const Privacy: NextPage = () => {
	return (
		<>
			<Meta />
			<Box py={[0, 30]} px={[5, 100, 150]}>
				<Nav activeHref="/privacy" />
				<WIP />
				<Footer />
			</Box>
		</>
	);
};

export default Privacy;
