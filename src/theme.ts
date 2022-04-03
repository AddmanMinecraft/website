import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const fonts = {
	base: 'Montserrat, sans-serif',
};

const styles = {
	global: {
		body: {
			fontFamily: 'base',
			bg: 'gray.900',
			overflowX: 'hidden',
		},
		'*': {
			scrollbarWidth: 'thin',
			scrollbarColor: '#A2A2A2 #121212',
		},
		'*::-webkit-scrollbar': {
			width: '8px',
		},
		'*::-webkit-scrollbar-track': {
			background: '#252525',
		},
		'*::-webkit-scrollbar-thumb': {
			backgroundColor: '#A2A2A2',
			borderRadius: '10px',
		},
		'*::selection': {
			background: '#4b43d7',
			color: '#fff',
		},
		'*::-moz-selection': {
			background: '#4b43d7',
			color: '#fff',
		},
	},
};

const components = {
	Button: {
		variants: {
			main: () => ({
				fontWeight: 'medium',
				color: 'white',
				backgroundColor: 'purple.600',
				borderRadius: '5px',
				_hover: {
					backgroundColor: 'blue.200',
				},
				_active: {
					backgroundColor: 'blue.200',
				},
			}),
			secondary: () => ({
				fontWeight: 'medium',
				color: 'white',
				backgroundColor: 'gray.700',
				borderRadius: '5px',
				_hover: {
					backgroundColor: 'gray.800',
				},
				_active: {
					backgroundColor: 'gray.800',
				},
			}),
		},
	},
};

const colors = {
	gray: {
		// Nav/Footer Text
		300: '#AAAAAA',
		// Secondary Button Background
		700: '#1B1C1C',
		// Secondary Button Hover
		800: '#161717',
		// Background
		900: '#121212',
	},
	blue: {
		// Main Button/Nav Text Hover
		200: '#4666E4',
	},
	purple: {
		// Main Button Background
		600: '#4b43d7',
	},
};

const theme = extendTheme({
	config,
	fonts,
	styles,
	components,
	colors,
});

export default theme;
