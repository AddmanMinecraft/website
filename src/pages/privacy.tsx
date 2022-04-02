import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { WIP } from '../components/WIP';
import { Footer } from '../components/Footer';

const Privacy: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav activeHref="/privacy" />
			<WIP />
			<Footer />
		</>
	);
};

export default Privacy;
