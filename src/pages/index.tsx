import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';

const Index: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav activeHref="/" />
			<Hero />
			<Footer />
		</>
	);
};

export default Index;