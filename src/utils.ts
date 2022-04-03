export const separateWithCommas = (a: number): string => {
	return a ? a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : '0';
};
