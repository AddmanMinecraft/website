import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { WIP } from '../components/WIP';
import { Footer } from '../components/Footer';

const Login: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav activeHref="/login" />
			<WIP />
			<Footer />
		</>
	);
};

export default Login;
