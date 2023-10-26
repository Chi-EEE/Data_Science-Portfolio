<script lang="ts">
	interface Image {
		src: string;
		alt: string;
	}
	export let images: Image[];
	let show = false;
</script>

<button
	on:click={() => {
		show = !show;
	}}>{show ? "Show:" : "Hide:"}</button
>
{#if show}
	{#each images as image}
		<img src={image.src} alt={image.alt} />
	{/each}
{/if}