export interface Category {
	name: string;
	id: string;
	description?: string;
	items: Item[];
}

export interface Item {
	id?: string,
	icon_image?: Image;
	name: string;
	small_text?: string;
	link?: ImageLink;
	short_description?: string;
	markdown_file?: string;
}

export interface Image {
	src: string;
	alt: string;
}

export interface ImageLink {
	image_src?: string;
	name: string;
	href: string;
}

export let categories: Category[] = [
	{
		name: 'Education',
		id: 'education',
		items: [
			{
				icon_image: {
					src: 'icons/other/SETU.png',
					alt: 'SETU Logo'
				},
				name: 'South East Technological University (IT Carlow)',
				link: {
					name: 'Bachelor of Software Development (Honours)',
					href: 'https://www.itcarlow.ie/courses/type/undergraduate-cao-courses/computing-networking-courses/cw238.htm'
				},
				small_text: 'November 2020- November 2024',
				short_description: `
I am currently studying at SETU Carlow Campus (Institute Of Technology Carlow).

- GPA of 1.1 (83.16%) in the 1st year
- GPA of 1.1 (78.33%) in the 2nd year
- GPA of 1.1 (82.4%) in the 3rd year
                `,
			}
		]
	},
	{
		name: 'Work Experience',
		id: 'work',
		items: [
			{
				icon_image: {
					src: 'icons/other/Workday.png',
					alt: 'Workday Logo'
				},
				name: 'Workday Internship',
				small_text: 'April 2023- August 2023',
				short_description: `
I have worked alongside other software engineers to work on the Toggle Automation project where

I had to use various technologies to develop the Toggle Automation project.
                `,
			}
		]
	},
	{
		name: 'Technologies',
		id: 'technologies',
		items: [
			{
				icon_image: {
					src: 'icons/other/Ultraytics.png',
					alt: 'Ultraytics Logo'
				},
				name: 'YoloV8',
				link: {
					name: 'YoloV8 Github Page',
					href: 'https://github.com/ultralytics/ultralytics'
				},
				short_description: `
Vision AI used to recognise objects in an image.

I have used this for my Clash Royale Image Recognition project.
                `,
			},
			{
				icon_image: {
					src: 'icons/other/OpenRewrite.png',
					alt: 'OpenRewrite Logo'
				},
				name: 'OpenRewrite',
				link: {
					name: 'OpenRewrite Website',
					href: 'https://docs.openrewrite.org/'
				},
				short_description: `
Tool used to refactor source code.

I have used OpenRewrite for the Toggle Automation project to handle toggle code.
                `,
			},
			{
				icon_image: {
					src: 'icons/other/RobloxStudio.png',
					alt: 'Roblox Studio Logo'
				},
				name: 'Roblox-Neural-Network-Library',
				link: {
					name: 'Roblox-Neural-Network-Library Github Page',
					href: 'https://github.com/Kironte/Roblox-Neural-Network-Library'
				},
				short_description: `
Roblox Neural Network Library built in Lua.

I have used the library to develop a simulation with rock, paper, and scissors entities to view its behaviour when changing its destroy scores.
                `,
			},
			{
				icon_image: {
					src: 'icons/other/Xmake.png',
					alt: 'Xmake Logo'
				},
				name: 'XMake',
				link: {
					name: 'XMake Github Page',
					href: 'https://xmake.io'
				},
				short_description: `
C++ Build System with a Package Manager.

A build system I'm currently using for all my C++ projects.
                `,
			},
			{
				icon_image: {
					src: 'icons/other/Svelte.png',
					alt: 'Svelte Logo'
				},
				name: 'Svelte',
				link: {
					name: 'Svelte Website',
					href: 'https://svelte.dev'
				},
				short_description: `
A web framework I'm currently using to develop this website.
                `,
			}
		]
	},
	{
		name: 'Projects',
		id: 'projects',
		items: [
			{
				name: 'Toggle Automation',
				short_description: `
For my internship at Workday, I worked alongside other software engineers to develop a tool which can automatically handle toggles. 

The project uses OpenRewrite, Jenkins, and Gradle to allow other software engineers to easily access the tool. 

It was built using Java and Groovy as it's primary programming language.
                `,
			},
			{
				icon_image: {
					src: 'icons/other/ClashRoyale.png',
					alt: 'Clash Royale Logo'
				},
				id: 'cr',
				name: 'Clash Royale Image Dataset Generator [PRIVATE]',
				short_description: `
I have made a C++ program which can generate a large image dataset of clash royale battles containing entities.

The dataset is used to train a YoloV8 model to recognise the entities on the screen.

The program uses multithreading to speed up the creation of images.
                `,
			},
			{
				icon_image: {
					src: 'icons/other/RandomCard.png',
					alt: 'Random Deck Icon'
				},
				name: 'Clash Royale Deck Suggester',
				link: {
					image_src: 'icons/other/Github-Light.png',
					name: 'Clash Royale Deck Suggester',
					href: 'https://github.com/Chi-EEE/Data_Science-Project',
				},
				short_description: `
Dataset Link: [Clash Royale Season 18](#cr-dataset)

For this project, I am going to use the Season 18 Clash Royale battle dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
				`,
				markdown_file: `markdown/clash_royale_deck_suggester.md`,
			},
			{
				name: 'Series of Data Science Notebooks',
				link: {
					image_src: 'icons/other/Github-Light.png',
					name: 'Data Science Project',
					href: 'https://github.com/Chi-EEE/Data_Science-Project/tree/main/Notebooks'
				},
				short_description: `
				I have created a series of notebooks to learn about Data Science.
				`,
				markdown_file: `markdown/data_science_notebooks.md`,
			}
		]
	},
	{
		name: 'Datasets working / worked on',
		id: 'dataset',
		items: [
			{
				id: 'cr-dataset',
				name: '100,000 Clash Royale Battle Images',
				short_description: `
Using the [Clash Royale Image Dataset Generator](#cr), I have generated 100,000 images of Clash Royale battles containing entities.

These images are used to train a YoloV8 model to recognise the entities on the screen.
                `,
			},
			{
				name: 'Season 18 Clash Royale Battle Dataset',
				link: {
					image_src: 'icons/other/Kaggle.png',
					name: 'Dataset Link',
					href: 'https://www.kaggle.com/datasets/bwandowando/clash-royale-season-18-dec-0320-dataset/',
				},
				short_description: `
I am using the Season 18 Clash Royale Battle Dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
				`,
			},
			{
				name: 'Random Forests Notebook',
				link: {
					image_src: 'icons/other/Random_forests.png',
					name: 'Notebook Link',
					href: 'https://github.com/Chi-EEE/Data_Science-Project/blob/main/Notebooks/05.08-Random-Forests.ipynb',
				},
				short_description: `
From my Data Science module, I had to use a provided notebook to learn about Random Forests. 
				`,
			},
		]
	},
	{
		name: 'Languages',
		id: 'languages',
		items: [
			{
				icon_image: {
					src: 'icons/lang/CPP.png',
					alt: 'C Plus Plus Logo'
				},
				name: 'C++',
				link: {
					name: 'C++ W3Schools',
					href: 'https://www.w3schools.com/cpp/'
				},
			},
			{
				icon_image: {
					src: 'icons/lang/Python.png',
					alt: 'Python Logo'
				},
				name: 'Python',
				link: {
					name: 'Python Website',
					href: 'https://www.python.org/'
				},
			},
			{
				icon_image: {
					src: 'icons/lang/Java.png',
					alt: 'Java Logo'
				},
				name: 'Java',
				link: {
					name: 'Java W3Schools',
					href: 'https://www.w3schools.com/java/'
				},
			},
			{
				icon_image: {
					src: 'icons/lang/Typescript.png',
					alt: 'Typescript Logo'
				},
				name: 'Typescript',
				link: {
					name: 'Typescript Website',
					href: 'https://www.typescriptlang.org/'
				},
			},
			{
				icon_image: {
					src: 'icons/lang/Rust.png',
					alt: 'Rust Logo'
				},
				name: 'Rust',
				link: {
					name: 'Rust Website',
					href: 'https://www.rust-lang.org/'
				},
			},
			{
				icon_image: {
					src: 'icons/lang/Lua.png',
					alt: 'Lua Logo'
				},
				name: 'Lua',
				link: {
					name: 'Lua Website',
					href: 'https://www.lua.org/'
				},
			}
		]
	},
	{
		name: 'Achievements',
		id: 'achievements',
		items: [
			{
				name: "Google's STEP Internship",
				short_description: `
Interviewed for Google's STEP internship where I did two difficult algorithm problems
                `,
			},
			{
				name: 'Google Algorithm Workshop',
				short_description: `
Attended an algorithm workshop by Google where we practiced algorithm problems
                `,
			},
			{
				name: 'Google Summer Insights 2022',
				short_description: `
Invited to attend in Google Summer Insights 2022 where I learned about Google's culture and career opportunities
                `,
			}
		]
	}
];