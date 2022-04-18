import '@fontsource/montserrat/900.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/400.css';
import Script from 'next/script';

import '../custom.css';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from '../theme';

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS={true} theme={theme}>
			<Component {...pageProps} />
			{process.env.NODE_ENV === "production" ? (<>
                <Script async src="https://arc.io/widget.min.js#sARimiAt" />
            </>
            ) : null}
		</ChakraProvider>
	);
}

export default App;
