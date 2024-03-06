<script lang="ts">
  import { onMount } from "svelte";
  export let html_file: string;
  let show = false;
  let source = "";
  onMount(async () => {
    source = await fetch(html_file).then((response) => response.text());
  });
</script>

<button
  on:click={() => {
    show = !show;
  }}>{!show ? "Click here to preview long description:" : "Hide:"}</button
>
{#if show}
  {@html source}
{/if}
