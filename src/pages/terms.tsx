import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { WIP } from '../components/WIP';
import { Footer } from '../components/Footer';

const Terms: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav activeHref="/terms" />
			<WIP />
			<Footer />
		</>
	);
};

export default Terms;
