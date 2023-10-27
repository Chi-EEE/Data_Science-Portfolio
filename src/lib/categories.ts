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
	short_description?: string;
	preview_section?: string;
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
					src: 'icons/other/SETU.png',
					alt: 'SETU Logo'
				},
				name: 'South East Technological University (IT Carlow)',
				link: {
					name: 'Bachelor of Software Development (Honours)',
					href: 'https://www.itcarlow.ie/courses/type/undergraduate-cao-courses/computing-networking-courses/cw238.htm'
				},
				small_text: 'November 2020- November 2024',
				short_description: /*html*/ `
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
					src: 'icons/other/Workday.png',
					alt: 'Workday Logo'
				},
				name: 'Workday Internship',
				small_text: 'April 2023- August 2023',
				short_description: /*html*/ `
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
					src: 'icons/other/Ultraytics.png',
					alt: 'Ultraytics Logo'
				},
				name: 'YoloV8',
				link: {
					name: 'YoloV8 Github Page',
					href: 'https://github.com/ultralytics/ultralytics'
				},
				short_description: /*html*/ `
                Vision AI used to recognise objects in an image.
                <br>
                I have used this for my Clash Royale Image Recognition project.
                `
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
				short_description: /*html*/ `
                Tool used to refactor source code.
                <br>
                I have used OpenRewrite for the Toggle Automation project to handle toggle code.
                `
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
				short_description: /*html*/ `
                Roblox Neural Network Library built in Lua.
                <br>
                I have used the library to develop a simulation with rock, paper, and scissors entities to view its behaviour when changing its destroy scores.
                `
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
				short_description: /*html*/ `
                C++ Build System with a Package Manager.
                <br>
                A build system I'm currently using for all my C++ projects.
                `
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
				short_description: /*html*/ `
                For my internship at Workday, I worked alongside other software engineers to develop a tool which can automatically handle toggles. 
                <br>
                The project uses OpenRewrite, Jenkins, and Gradle to allow other software engineers to easily access the tool. 
                <br>
                It was built using Java and Groovy as it's primary programming language.
                `
			},
			{
				icon_image: {
					src: 'icons/other/ClashRoyale.png',
					alt: 'Clash Royale Logo'
				},
				name: '<span id="cr">Clash Royale Image Dataset Generator</span>',
				short_description: /*html*/ `
                I have made a C++ program which can generate a large image dataset of clash royale battles containing entities.
                <br>
                The dataset is used to train a YoloV8 model to recognise the entities on the screen.
                <br>
                The program uses multithreading to speed up the creation of images.
                `
			},
			{
				icon_image: {
					src: 'icons/other/RandomCard.png',
					alt: 'Random Deck Icon'
				},
				name: 'Clash Royale Deck Suggester',
				short_description: `
				Github Link: <a href='https://github.com/Chi-EEE/Data_Science-Project'>Clash Royale Deck Suggester</a>
				<br>
				Dataset Link: <a href='https://www.kaggle.com/datasets/bwandowando/clash-royale-season-18-dec-0320-dataset/'>Clash Royale Season 18 Battles</a>
				<br>
				For this project, I am going to use the Season 18 Clash Royale battle dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
				<br>
				`,
				preview_section: `
				<h5>Preprocessing</h5>
				<p>
					Before using the dataset, I had to preprocess the data to make it easier for the model to train on.
					<br>
					I removed the columns that I didn't need: Player tag, their ranking and the date of the battle.
					<br>
					After the first step of preprocessing, I reduced the headings from 75 to 36 headings. Here is a bar chart showing the number of cards used in the dataset:
					<img
						style="border: 2px solid black;"
						src="graphs/bar_chart_1.png"
						alt="First Bar Chart with unfiltered data"
					/>
					<br>
					Since these are ladder matches, I removed the rows with cards that are under level 13 since that is not the max level and will introduce bias since some cards are alot weaker when underleveled.
				</p>
				<h5>Tools And Technologies</h5>
				<ul>
					<li>Python</li>
					<li>Pandas</li>
				</ul>
				`
			}
		]
	},
	{
		name: 'Datasets working / worked on',
		id: 'dataset',
		items: [
			{
				name: '100,000 Clash Royale Battle Images',
				short_description: `
                Using the <a href='#cr'>Clash Royale Image Dataset Generator</a>, I have generated 100,000 images of Clash Royale battles containing entities.
                <br>
                These images are used to train a YoloV8 model to recognise the entities on the screen.
                `
			},
			{
				name: 'Season 18 Clash Royale Battle Dataset',
				short_description: `
				I am going to use the Season 18 Clash Royale Battle Dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
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
					src: 'icons/lang/CPP.png',
					alt: 'C Plus Plus Logo'
				},
				name: 'C++'
			},
			{
				icon_image: {
					src: 'icons/lang/Python.png',
					alt: 'Python Logo'
				},
				name: 'Python'
			},
			{
				icon_image: {
					src: 'icons/lang/Java.png',
					alt: 'Java Logo'
				},
				name: 'Java'
			},
			{
				icon_image: {
					src: 'icons/lang/Typescript.png',
					alt: 'Typescript Logo'
				},
				name: 'Typescript'
			},
			{
				icon_image: {
					src: 'icons/lang/Rust.png',
					alt: 'Rust Logo'
				},
				name: 'Rust'
			},
			{
				icon_image: {
					src: 'icons/lang/Lua.png',
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
				short_description: `
                Interviewed for Google's STEP internship where I did two difficult algorithm problems
                `
			},
			{
				name: 'Google Algorithm Workshop',
				short_description: `
                Attended an algorithm workshop by Google where we practiced algorithm problems
                `
			},
			{
				name: 'Google Summer Insights 2022',
				short_description: `
                Invited to attend in Google Summer Insights 2022 where I learned about Google's culture and career opportunities
                `
			}
		]
	}
];