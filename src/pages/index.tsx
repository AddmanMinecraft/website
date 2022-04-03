import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { BotStatistics, BotStatsTypes } from '../components/BotStatistics';

import { apiConfig } from '../config';
import axios from 'axios';

const Index: NextPage<BotStatsTypes> = ({ observerData, statcordData }) => {
	return (
		<>
			<Meta />
			<Nav activeHref="/" />
			<Hero />
			<Features />
			<BotStatistics observerData={observerData} statcordData={statcordData} />
			<Footer />
		</>
	);
};

export async function getStaticProps() {
	const observerApiCall = await axios.get('https://api.invite.observer/v1/stats', apiConfig);
	const statcordApiCall = await axios.get('https://api.statcord.com/v3/813718772908163082');
	const observerData = observerApiCall.data;
	const statcordData = statcordApiCall.data;
	return {
		props: {
			observerData,
			statcordData,
		},
		// Every x seconds, refresh stats
		// 5 mins
		revalidate: 300,
	};
}

export default Index;
