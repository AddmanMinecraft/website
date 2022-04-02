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
			<Nav activeHref="/" />
			<Hero />
			<Features />
			<Footer />
		</>
	);
};

export default Index;
