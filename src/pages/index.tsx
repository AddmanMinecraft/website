import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';

const Index: NextPage = () => {
	return (
		<>
			<Meta />
			<Box py={[0, 30]} px={[5, 100, 150]}>
				<Nav activeHref="/" />
				<Hero />
				<Features />
				<Footer />
			</Box>
		</>
	);
};

export default Index;
