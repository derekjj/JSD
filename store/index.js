import Vue from 'vue'
import Vuex from 'vuex'
import { componentsPlugin } from 'bootstrap-vue'
// TODO: Update Descriptions (about short and long and tech)
const store = () => {
	return new Vuex.Store({
		state: {
			projects: [
				{
					id: 0,
					type: 'web',
					image: '../whosjimmy.png',
					url: 'http://whosjimmy.com',
					project: 'whosjimmy',
					title: 'Fullstack Web Developer',
					dates: 'April 2010 - Present',
					company: "Who's Jimmy",
					shortDescription:
						'Personal Portfolio of a Skilled Film Gizmologist.',
					description:
						'Personal Portfolio of a Skilled Film Machinist.',
					about: '',
					tech: ['PhP', 'VueJS', 'NuxtJS', 'Bootstrap'],
				},
				{
					id: 1,
					type: 'web',
					image: '../oiika.png',
					url: 'http://oiika.com',
					project: 'oiika',
					title: 'Software Developer',
					dates: 'May 2017 –  March 2019',
					company: 'Oiika',
					shortDescription:
						'A platform where passionate tutors and mentors share their knowledge with individuals like yourself.',
					description:
						'A platform where passionate tutors and mentors share their knowledge with individuals like yourself.',
					about: 'Worked as part of the development team developing, utilizing google maps for visual displays of service areas and stripe to handle transactions.',
					tech: [
						'Node.js',
						'React.js',
						'MongoDB',
						'Stripe',
						'Google Maps API',
						'React Native',
					],
				},
				{
					id: 2,
					type: 'web',
					image: '../edata-web.png',
					url: 'http://service.edatanow.com',
					project: 'edata',
					title: 'Full Stack Web Developer',
					dates: 'April 2018 - Sept 2019',
					company: 'E-Data Now!',
					shortDescription:
						'I contributed to the development of the administration site for the eDataNow! mobile application, accessible at https://www.edatanow.com/. As a Junior Developer, I worked on features for data collection, audit task setup, and displaying graphs, using Vue.js for the frontend and Ruby on Rails for the backend.',
					description:
						'As a Junior Developer, I was involved in the development of the administration site for the eDataNow! mobile application, accessible at https://www.edatanow.com/. This platform is crucial for managing data collected from the mobile app, setting up audit tasks, and presenting data visually through graphs and charts. The frontend was developed using Vue.js, providing a responsive and interactive user interface that allowed administrators to efficiently manage and analyze data. The backend, powered by Ruby on Rails, ensured robust data handling and seamless integration with the mobile application. My responsibilities included implementing features for data collection, developing tools for audit task setup, and creating visual representations of data to facilitate better decision-making. This project provided me with valuable experience in web development and a deeper understanding of integrating frontend and backend technologies.',
					about: '',
					tech: [
						'PhP',
						'VueJS',
						'NuxtJS',
						'Ruby on Rails',
						'Bootstrap',
						'Scout',
						'JIRA',
					],
				},
				{
					id: 3,
					type: 'app',
					image: '../placeholder.jpg',
					url: '',
					title: 'TBD',
					company: 'Johnston Software Development',
					shortDescription:
						'Communicaiton App for limited verbal people.',
					description: 'Communicaiton App for limited verbal people.',
					project: 'TTC',
					about: '',
					tech: ['SQLite', 'Flutter'],
				},
				{
					id: 4,
					type: 'app',
					image: '../edata-app.png',
					title: 'E-Data Now!',
					company: 'E-Data Now!',
					shortDescription:
						"I contributed to the development of the eDataNow! mobile application, available at https://play.google.com/store/apps/details?id=com.edatanow.edatanow_app, using Flutter. As a Junior Developer, I focused on building and enhancing various features to improve the app's functionality and user experience on both iOS and Android platforms.",
					description:
						"As a Junior Developer, I was involved in the development of the eDataNow! mobile application, found at https://play.google.com/store/apps/details?id=com.edatanow.edatanow_app, using Flutter. My role encompassed building and refining multiple features to ensure smooth performance and an intuitive user experience across both iOS and Android devices. Working with Flutter allowed for a cohesive and efficient cross-platform development process. During this project, I collaborated closely with senior developers and other team members, contributing to the app's overall architecture and design. My responsibilities included writing clean and maintainable code, debugging, and optimizing the app's performance to meet user needs effectively. This experience helped me develop a strong foundation in mobile app development and teamwork..",
					project: 'edataApp',
					about: '',
					tech: ['Swift', 'C++', 'Sqlite', 'Ruby on Rails'],
				},
				{
					id: 5,
					type: 'app',
					image: '../edata-app-time.png',
					title: 'EDN Time',
					link: 'https://play.google.com/store/apps/details?id=com.edatanow.edatanow_app',
					company: 'E-Data Now!',
					shortDescription:
						"I contributed to the development of the eDataNow! mobile application, available at https://play.google.com/store/apps/details?id=com.edatanow.edatanow_app, using Flutter. As a Junior Developer, I focused on building and enhancing various features to improve the app's functionality and user experience on both iOS and Android platforms.",
					description:
						"As a Junior Developer, I was involved in the development of the eDataNow! mobile application, found at https://play.google.com/store/apps/details?id=com.edatanow.edatanow_app, using Flutter. My role encompassed building and refining multiple features to ensure smooth performance and an intuitive user experience across both iOS and Android devices. Working with Flutter allowed for a cohesive and efficient cross-platform development process. During this project, I collaborated closely with senior developers and other team members, contributing to the app's overall architecture and design. My responsibilities included writing clean and maintainable code, debugging, and optimizing the app's performance to meet user needs effectively. This experience helped me develop a strong foundation in mobile app development and teamwork..",
					project: 'edataTime',
					about: '',
					tech: ['SQLite', 'Flutter'],
				},
				{
					id: 6,
					type: 'web',
					image: '../tacklehunger.png',
					title: 'Mapping App',
					link: 'https://map.tacklehunger.org/',
					company: 'Tackle Hunger',
					shortDescription:
						'I developed the interactive map page for the "Tackle Hunger" project at https://map.tacklehunger.org/. Utilizing React for the frontend, I integrated Mapbox GL JS for dynamic and customizable map features, and connected the application to a RESTful API for real-time data updates. The project emphasizes a responsive and user-friendly interface, ensuring seamless interaction across various devices.',
					description:
						'As a Senior Software Developer, I led the development of the map page for the "Tackle Hunger" initiative, accessible at https://map.tacklehunger.org/. The project\'s core was built using React, providing a robust and flexible framework for creating dynamic user interfaces. To enhance the mapping functionalities, I incorporated Mapbox GL JS, a powerful library that allowed for high-performance, interactive maps with a wide range of customization options. The application interfaces with a RESTful API, enabling real-time data updates and ensuring users have access to the most current information. The map page was designed with responsiveness in mind, ensuring an optimal experience on desktops, tablets, and mobile devices. My role involved not only the technical implementation but also collaborating with designers and stakeholders to deliver a feature-rich, user-centric mapping solution.',
					project: 'edataTime',
					about: '',
					tech: [
						'NextJS',
						'ReactJS',
						'Mapbox',
						'Material-UI',
						'Algolia',
					],
				},
			],
		},
		getters: {
			projects(state) {
				return state.projects
			},
			apps(state) {
				return state.projects.filter((item) => item.type === 'app')
			},
			web(state) {
				return state.projects.filter((item) => item.type === 'web')
			},
		},
	})
}
export default store
