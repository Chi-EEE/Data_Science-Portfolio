export interface Category {
	name: string;
	id: string;
	description?: string;
	items: Item[];
}
export interface Item {
	icon_image?: Image;
	name: string;
	link?: {
		name: string;
		href: string;
	};
	small_text?: string;
	content?: string;
	preview_images?: Image[];
}
export interface Image {
	src: string;
	alt: string;
}
export let categories: Category[] = [
	{
		name: 'Education',
		id: 'education',
		items: [
			{
				icon_image: {
					src: 'SETU.png',
					alt: 'SETU Logo'
				},
				name: 'South East Technological University (IT Carlow)',
				link: {
					name: 'Bachelor of Software Development (Honours)',
					href: 'https://www.itcarlow.ie/courses/type/undergraduate-cao-courses/computing-networking-courses/cw238.htm'
				},
				small_text: 'November 2020- November 2024',
				content: /*html*/ `
                I am currently studying at SETU Carlow Campus (Institute Of Technology Carlow).
                <br>
                <br>
                <ul>
                    <li>
                        GPA of 1.1 (83.16%) in the 1st year
                    </li>
                    <li>
                        GPA of 1.1 (78.33%) in the 2nd year
                    </li>
                    <li>
                        GPA of 1.1 (82.4%) in the 3rd year
                    </li>
                <ul>
                `
			}
		]
	},
	{
		name: 'Work Experience',
		id: 'work',
		items: [
			{
				icon_image: {
					src: 'Workday.png',
					alt: 'Workday Logo'
				},
				name: 'Workday Internship',
				small_text: 'April 2023- August 2023',
				content: /*html*/ `
                I have worked alongside other software engineers to work on the Toggle Automation project where
                <br>
                I had to use various technologies to develop the Toggle Automation project.
                `
			}
		]
	},
	{
		name: 'Technologies',
		id: 'technologies',
		items: [
			{
				icon_image: {
					src: 'Ultraytics.png',
					alt: 'Ultraytics Logo'
				},
				name: 'YoloV8',
				link: {
					name: 'YoloV8 Github Page',
					href: 'https://github.com/ultralytics/ultralytics'
				},
				content: /*html*/ `
                Vision AI used to recognise objects in an image.
                <br>
                I have used this for my Clash Royale Image Recognition project.
                `
			},
			{
				icon_image: {
					src: 'OpenRewrite.png',
					alt: 'OpenRewrite Logo'
				},
				name: 'OpenRewrite',
				link: {
					name: 'OpenRewrite Website',
					href: 'https://openrewrite.org'
				},
				content: /*html*/ `
                Tool used to refactor source code.
                <br>
                I have used OpenRewrite for the Toggle Automation project to handle toggle code.
                `
			},
			{
				icon_image: {
					src: 'RobloxStudio.png',
					alt: 'Roblox Studio Logo'
				},
				name: 'Roblox-Neural-Network-Library',
				link: {
					name: 'Roblox-Neural-Network-Library Github Page',
					href: 'https://github.com/Kironte/Roblox-Neural-Network-Library'
				},
				content: /*html*/ `
                Roblox Neural Network Library built in Lua.
                <br>
                I have used the library to develop a simulation with rock, paper, and scissors entities to view its behaviour when changing its destroy scores.
                `
			},
			{
				icon_image: {
					src: 'Xmake.png',
					alt: 'Xmake Logo'
				},
				name: 'XMake',
				link: {
					name: 'XMake Github Page',
					href: 'https://xmake.io'
				},
				content: /*html*/ `
                C++ Build System with a Package Manager.
                <br>
                A build system I'm currently using for all my C++ projects.
                `
			},
			{
				icon_image: {
					src: 'Svelte.png',
					alt: 'Svelte Logo'
				},
				name: 'Svelte',
				link: {
					name: 'Svelte Website',
					href: 'https://svelte.dev'
				},
				content: `
                A web framework I'm currently using to develop this website.
                `
			}
		]
	},
	{
		name: 'Projects',
		id: 'projects',
		items: [
			{
				name: 'Toggle Automation',
				content: /*html*/ `
                For my internship at Workday, I worked alongside other software engineers to develop a tool which can automatically handle toggles. 
                <br>
                The project uses OpenRewrite, Jenkins, and Gradle to allow other software engineers to easily access the tool. 
                <br>
                It was built using Java and Groovy as it's primary programming language.
                `
			},
			{
				icon_image: {
					src: 'ClashRoyale.png',
					alt: 'Clash Royale Logo'
				},
				name: '<span id="cr">Clash Royale Image Dataset Generator</span>',
				content: /*html*/ `
                I have made a C++ program which can generate a large image dataset of clash royale battles containing entities.
                <br>
                The dataset is used to train a YoloV8 model to recognise the entities on the screen.
                <br>
                The program uses multithreading to speed up the creation of images.
                `
			},
			{
				icon_image: {
					src: 'RandomCard.png',
					alt: 'Random Deck Icon'
				},
				name: 'Clash Royale Deck Suggester',
				content: `
                I am planning to use a Clash Royale dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
                `
			}
		]
	},
	{
		name: 'Dataset worked on',
		id: 'dataset',
		items: [
			{
				name: '100,000 Clash Royale Battle Images',
				content: `
                Using the <a href='#cr'>Clash Royale Image Dataset Generator</a>, I have generated 100,000 images of Clash Royale battles containing entities.
                <br>
                These images are used to train a YoloV8 model to recognise the entities on the screen.
                `
			}
		]
	},
	{
		name: 'Languages',
		id: 'languages',
		items: [
			{
				icon_image: {
					src: 'CPP.png',
					alt: 'C Plus Plus Logo'
				},
				name: 'C++'
			},
			{
				icon_image: {
					src: 'Python.png',
					alt: 'Python Logo'
				},
				name: 'Python'
			},
			{
				icon_image: {
					src: 'Java.png',
					alt: 'Java Logo'
				},
				name: 'Java'
			},
			{
				icon_image: {
					src: 'Typescript.png',
					alt: 'Typescript Logo'
				},
				name: 'Typescript'
			},
			{
				icon_image: {
					src: 'Rust.png',
					alt: 'Rust Logo'
				},
				name: 'Rust'
			},
			{
				icon_image: {
					src: 'Lua.png',
					alt: 'Lua Logo'
				},
				name: 'Lua'
			}
		]
	},
	{
		name: 'Achievements',
		id: 'achievements',
		items: [
			{
				name: "Google's STEP Internship",
				content: `
                Interviewed for Google's STEP internship where I did two difficult algorithm problems
                `
			},
			{
				name: 'Google Algorithm Workshop',
				content: `
                Attended an algorithm workshop by Google where we practiced algorithm problems
                `
			},
			{
				name: 'Google Summer Insights 2022',
				content: `
                Invited to attend in Google Summer Insights 2022 where I learned about Google's culture and career opportunities
                `
			}
		]
	}
];
