export const observerConfig = {
	headers: {
		'API-Key': process.env.OBSERVER_API_KEY as string,
	},
};

export const topGGConfig = {
	headers: {
		'Authorization': process.env.TOPGG_API_KEY as string,
	},
};
