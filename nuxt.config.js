export default {
	mode: 'spa',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Johnston Software Development',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [
			// { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
			{ rel: 'manifest', href: '/site.webmanifest' },
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [{ src: '~/plugins/firebase.js', mode: 'client' }],

	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxtjs/vuetify'],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		'@nuxtjs/font-awesome',
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		'@nuxtjs/firebase',
	],
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
	},
	axios: {
		baseURL: 'http://localhost:3000/api', // Replace with your API base URL
	},
	firebase: {
		config: {
			apiKey: process.env.NUXT_ENV_API_KEY,
			authDomain: process.env.NUXT_ENV_AUTH_DOMAIN,
			projectId: process.env.NUXT_ENV_PROJECT_ID,
			storageBucket: process.env.NUXT_ENV_STORAGE_BUCKET,
			messagingSenderId: process.env.NUXT_ENV_MESSAGING_SENDER_ID,
			appId: process.env.NUXT_ENV_APP_ID,
			measurementId: process.env.NUXT_ENV_MEASUREMENT_ID,
		},
		services: {
			auth: true,
			firestore: true,
			storage: true,
			database: true,
		},
	},
	auth: {
		middleware: ['~/middleware/auth.js'],
		cookie: {
			prefix: 'auth.',
			// options: {
			// 	path: '/',
			// },
		},
		localStorage: {
			prefix: 'auth.',
		},
		strategies: {
			local: {
				token: {
					property: 'token',
					global: true,
					required: true,
					type: 'Bearer',
				},
				user: {
					property: 'user',
					autoFetch: true,
				},
				endpoints: {
					login: {
						url: '/login',
						method: 'post',
						propertyName: 'token',
					},
					logout: { url: '/logout', method: 'post' },
				},
			},
		},
		// redirect: {
		// 	// home: '/',
		// 	login: '/login',
		// 	callback: '/login',
		// 	// logout: '/',
		// },
	},
}
