/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/donate',
				destination: 'https://github.com/sponsors/ObserverMC',
				permanent: true,
			},
			{
				source: '/invite',
				destination:
					'https://discord.com/oauth2/authorize?client_id=813718772908163082&permissions=388168&scope=applications.commands%20bot',
				permanent: true,
			},
			{
				source: '/support',
				destination: 'https://discord.com/invite/YyCyZtchg3',
				permanent: true,
			},
			{
				source: '/arc-sw.js',
				destination: 'https://arc.io/arc-sw.js',
				permanent: true,
			},
		];
	},
};
