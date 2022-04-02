import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { WIP } from '../components/WIP';
import { Footer } from '../components/Footer';

const Commands: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav activeHref="/commands" />
			<WIP />
			<Footer />
		</>
	);
};

export default Commands;
