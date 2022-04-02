import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { WIP } from '../components/WIP';
import { Footer } from '../components/Footer';

const About: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav activeHref="/about" />
			<WIP />
			<Footer />
		</>
	);
};

export default About;
