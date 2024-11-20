export interface Resource {
	id: string;
	title: string;
	description: string;
	url: string;
	categories: ResourceCategory[];
	color: string;
	favicon?: string;
}

export enum ResourceCategory {
	Frontend = 'frontend',
	Backend = 'backend',
	Framework = 'framework',
	UiLibrary = 'ui library',
}

export const resources: Resource[] = [
	{
		id: 'astro',
		title: 'Astro',
		description: 'Astro is a JavaScript web framework optimized for building fast, content-driven websites.',
		url: 'https://astro.build/',
		categories: [ResourceCategory.Frontend, ResourceCategory.Framework],
		color: '#DF377C',
		favicon: 'https://astro.build/favicon.svg',
	},
	{
		id: 'vue',
		title: 'Vue',
		description: 'An approachable, performant and versatile framework for building web user interfaces.',
		url: 'https://vuejs.org/',
		categories: [ResourceCategory.Frontend, ResourceCategory.Framework],
		color: '#42B883',
		favicon: 'https://vuejs.org/logo.svg',
	},
	{
		id: 'svelte',
		title: 'Svelte',
		description:
			'Svelte is a UI framework to let you write breathtakingly concise components with minimal work in the browser.',
		url: 'https://svelte.dev/',
		categories: [ResourceCategory.Frontend, ResourceCategory.Framework],
		color: '#FF3E00',
		favicon: 'https://svelte.dev/favicon.png',
	},
	{
		id: 'react',
		title: 'React',
		description: 'The library for web and native user interfaces.',
		url: 'https://react.dev/',
		categories: [ResourceCategory.Frontend, ResourceCategory.Framework],
		color: '#58C4DC',
		favicon: 'https://react.dev/favicon-32x32.png',
	},
	{
		id: 'angular',
		title: 'Angular',
		description: 'Angular is a web framework that empowers developers to build fast, reliable applications.',
		url: 'https://angular.dev/',
		categories: [ResourceCategory.Frontend, ResourceCategory.Framework],
		color: '#F60849',
		favicon: 'https://angular.dev/assets/icons/favicon.ico',
	},
	{
		id: 'nextjs',
		title: 'Nextjs',
		description: 'Next.js enables you to create high-quality web applications with the power of React components.',
		url: 'https://nextjs.org/',
		categories: [ResourceCategory.Frontend, ResourceCategory.Framework],
		color: '#fff',
		favicon: 'https://nextjs.org/favicon.ico',
	},
	{
		id: 'nuxt',
		title: 'Nuxt',
		description: 'Nuxt is an open source framework that makes web development intuitive and powerful.',
		url: 'https://nuxt.com/',
		categories: [ResourceCategory.Frontend, ResourceCategory.Framework],
		color: '#00DC82',
		favicon: 'https://nuxt.com/icon.png',
	},
	{
		id: 'tailwind',
		title: 'TailwindCSS',
		description:
			'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
		url: 'https://tailwindcss.com/',
		categories: [ResourceCategory.Frontend, ResourceCategory.Framework],
		color: '#0CA5E9',
		favicon: 'https://tailwindcss.com/favicons/favicon-32x32.png?v=3',
	},
];
