<script lang="ts">
	import PreviewSection from './PreviewSection.svelte';
    import { categories } from './categories';
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

<h1>Chi Huu Huynh</h1>
<h2>Software Developer</h2>
<h3 id="table_of_contents">Table of Contents:</h3>
<ul>
	{#each categories as category}
		<li style="margin-top: 5px; margin-bottom: 5px;"><a href="#{category.id}">{category.name}</a></li>
	{/each}
</ul>

{#each categories as category}
	<hr />
	<section id={category.id}>
		<h3>{category.name}: <a href="#table_of_contents">[back]</a></h3>
		<ul>
			{#each category.items as item}
				<li style="margin-top: 5px; margin-bottom: 5px">
					<h4 style="margin:auto; display:flex; align-items:center;">
						{#if item.icon_image}
							<img
								style="width: 50px; margin-right:10px"
								src={item.icon_image.src}
								alt={item.icon_image.alt}
							/>
						{/if}
						{@html item.name}
					</h4>
					{#if item.link}
						<a href={item.link.href}>{item.link.name}</a>
					{/if}
					{#if item.small_text}
						<small>{item.small_text}</small>
					{/if}
					{#if item.content}
                        <p>{@html item.content}</p>
					{/if}
					{#if item.preview_images}
						<PreviewSection images={item.preview_images} />
					{/if}
				</li>
			{/each}
		</ul>
	</section>
{/each}
<hr />
<footer>This website was made using <a href="https://svelte.dev/">Svelte</a></footer>
