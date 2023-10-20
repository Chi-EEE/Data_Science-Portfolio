<script lang="ts">
	interface Category {
		name: string;
		id: string;
		items: Item[];
	}
	interface Item {
		name: string;
		link?: {
			name: string;
			href: string;
		};
		small_text?: string;
		content: string;
	}
	let categories: Category[] = [
		{
			name: 'Education',
			id: 'education',
			items: [
				{
					name: 'South East Technological University (IT Carlow)',
					link: {
						name: 'Bachelor of Software Development (Honours)',
						href: 'https://www.itcarlow.ie/courses/type/undergraduate-cao-courses/computing-networking-courses/cw238.htm'
					},
					small_text: 'November 2020- November 2024',
					content: `
                    I am currently studying at SETU Carlow Campus (Institute Of Technology Carlow).
                    <br>
                    <br>
                    GPA of 1.1 (78.33%) in the 2nd year
                    <br>
                    GPA of 1.1 (82.4%) in the 3rd year
                    `
				}
			]
		},
		{
			name: 'Work Experience',
			id: 'work',
			items: [
				{
					name: 'Workday Internship',
					small_text: 'April 2023- August 2023',
					content: `
                    I have worked alongside other software engineers to work on the Toggle Automation project where
                    <br>
		            I had to use various technologies to develop the Toggle Automation project.
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
					content: `
                    For my internship at Workday, I worked alongside other software engineers to develop a tool which can automatically handle toggles. 
                    <br>
                    The project uses OpenRewrite, Jenkins, and Gradle to allow other software engineers to easily access the tool. 
                    <br>
                    It was built using Java and Groovy as it's primary programming language.
                    `
				},
                {
                    name: "Clash Royale Image Dataset Generator",
                    content: `
                    I have made a C++ program which can generate a large image dataset of clash royale battles containing entities.
                    <br>
                    The dataset is used to train a YoloV8 model to recognise the entities on the screen.
                    <br>
                    The program uses multithreading to speed up the creation of images.
                    `
                },
                {
                    name: "Clash Royale Deck Suggester",
                    content: `
                    I am planning to use a Clash Royale dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
                    `
                }
			]
		}
	];
</script>

<h1>Chi Huu Huynh</h1>
<h2>Software Developer</h2>
{#each categories as category}
	<div id="#{category.id}">
		<h3>{category.name}:</h3>
		<ul>
			{#each category.items as item}
				<li>
					<h4>{item.name}</h4>
					{#if item.link}
						<a href={item.link.href}>{item.link.name}</a>
					{/if}
					{#if item.small_text}
						<small>{item.small_text}</small>
					{/if}
					<p>{@html item.content}</p>
				</li>
			{/each}
		</ul>
	</div>
{/each}
