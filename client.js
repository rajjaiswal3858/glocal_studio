import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { loadableReady } from '@loadable/component';
import { HelmetProvider } from 'react-helmet-async';

import { DeviceProvider } from '@/context/DeviceContext';
import { ContactFormProvider } from '@/context/ContactFormContext';

import theme from '@/theme';

import App from '@/App';

import createEmotionCache from './createEmotionCache';

const cache = createEmotionCache();

const deviceInfo = (window).__DEVICE_INFO__ || {};

const initialData = (window).__INITIAL_DATA__ || {};

loadableReady(() => {
	hydrateRoot(
		document.getElementById('root'),
		<HelmetProvider>
			<DeviceProvider value={deviceInfo}>
				<CacheProvider value={cache}>
					<ThemeProvider theme={theme}>
						<BrowserRouter
							future={{
								v7_startTransition: true,
								v7_relativeSplatPath: true
							}}
						>
							<ContactFormProvider>
								<CssBaseline />
								<App initialData={initialData} />
							</ContactFormProvider>
						</BrowserRouter>
					</ThemeProvider>
				</CacheProvider>
			</DeviceProvider>
		</HelmetProvider>
	);
});

// Reset the initial data after hydration
if (typeof window !== 'undefined') {
	delete window.__INITIAL_DATA__;
}
