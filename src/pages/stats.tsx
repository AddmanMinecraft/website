import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { WIP } from '../components/WIP';
import { Footer } from '../components/Footer';

const Stats: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav activeHref="/stats" />
			<WIP />
			<Footer />
		</>
	);
};

export default Stats;
