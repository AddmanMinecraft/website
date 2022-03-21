import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { WIP } from '../components/WIP';
import { Footer } from '../components/Footer';

const Leaderboards: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav activeHref="/leaderboards" />
			<WIP />
			<Footer />
		</>
	);
};

export default Leaderboards;
