<script lang="ts">
	export let preview_section: string;
	let show = false;
</script>

<button
	on:click={() => {
		show = !show;
	}}>{show ? "Hide:" : "Show:"}</button
>
{#if show}
	{@html preview_section}
{/if}