import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

const metaConfig = {
	title: 'Observer', // eslint-disable-line quotes
	description:
		'A unique Hypixel stats bot that allows users to view their daily and weekly Bedwars, SkyWars and Duels statistics.',
	url: 'https://invite.observer',
	siteName: 'Observer',
};

export const Meta = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
				{/* <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${router.basePath}/favicon-32x32.png`}
					key="icon32"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${router.basePath}/favicon-16x16.png`}
					key="icon16"
				/> */}
				<link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
			</Head>
			<NextSeo
				title={metaConfig.title}
				description={metaConfig.description}
				canonical={metaConfig.url}
				openGraph={{
					title: metaConfig.title,
					description: metaConfig.description,
					url: metaConfig.url,
					site_name: metaConfig.siteName,
					images: [
						{
							url: 'https://og.invite.observer/api/image?fileType=png&layoutName=Observer&Theme=Dark&Title=Observer&Sub+Title=',
						},
					],
				}}
				twitter={{
					handle: '@observerbotmc',
					site: '@observerbotmc',
					cardType: 'summary_large_image',
				}}
			/>
		</>
	);
};
