import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { BotStatistics } from '../components/BotStatistics';

import { topGGConfig } from '../config';
import axios from 'axios';

const Index: NextPage = ({ topGGData }: any) => {
	return (
		<>
			<Meta />
			<Nav activeHref="/" />
			<Hero />
			<Features />
			<BotStatistics topGGData={topGGData} />
			<Footer />
		</>
	);
};

export async function getStaticProps() {
	// const observerApiCall = await axios.get('https://api.invite.observer/v1/stats', observerConfig);
	const topGGApiCall = await axios.get('https://top.gg/api/bots/813718772908163082/stats', topGGConfig);
	// const observerData = observerApiCall.data;
	const topGGData = topGGApiCall.data;
	return {
		props: {
			// observerData,
			topGGData,
		},
		// Every x seconds, refresh stats
		// 5 mins
		revalidate: 300,
	};
}

export default Index;
