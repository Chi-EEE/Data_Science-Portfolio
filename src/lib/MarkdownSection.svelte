<script lang="ts">
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";
  export let markdown_file: string;
  let show = false;
  let source = "";
  onMount(async () => {
    source = await fetch(markdown_file).then((response) =>
      response.text()
    );
  });
</script>

<button
  on:click={() => {
    show = !show;
  }}>{!show ? "Click here to preview long description:" : "Hide:"}</button
>
{#if show}
  <SvelteMarkdown {source} />
{/if}
