<script lang="ts">
	import Category from '../lib/Category.svelte';
	import { categories } from '../lib/categories';
</script>

<svelte:head>
	<style>
		body {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		}
		h3 a {
			font-size: 0.5em;
			text-align: center;
		}
	</style>
</svelte:head>

<div style="display: flex; flex-direction: row;">
	<section style="width: 50%;" id="main">
		<h1>Chi Huu Huynh</h1>
		<h2>Software Developer</h2>
		<h3 id="table_of_contents">Table of Contents:</h3>
		<ul>
			{#each categories as category}
				<li style="margin-top: 5px; margin-bottom: 5px;">
					<a href="#{category.id}">{category.name}</a>
				</li>
			{/each}
		</ul>
	</section>
	<section style="width: 50%; text-align:right; align-items:right;" id="contact">
		<h2>Contact</h2>
		<ul style="text-align: right; list-style-position: inside;">
			<li style="margin-top: 5px;">
				Email: <a href="mailto:chi.h.linkedin@gmail.com">chi.h.linkedin@gmail.com</a>
			</li>
			<li style="margin-top: 5px;">
				LinkedIn: <a href="https://www.linkedin.com/in/chi-huu-huynh-a5b315206/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BS4r6%2BEmtQKyoMSJF%2BryGhg%3D%3D">chi-huu-huynh</a>
			</li>
			<li style="margin-top: 5px;">
				Github: <a href="https://github.com/Chi-EEE">Chi-EEE</a>
			</li>
		</ul>
	</section>
</div>

{#each categories as category}
	<Category {category} />
{/each}
<hr />
<footer>This website was made using <a href="https://svelte.dev/">Svelte</a></footer>