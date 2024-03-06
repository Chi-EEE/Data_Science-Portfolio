<script lang="ts">
  import { onMount } from "svelte";
  import { marked, TokensList } from "marked";
  import SvelteMarkdown from "svelte-markdown";
  export let markdown_file: string;
  let show = false;
  let source: TokensList;
  onMount(async () => {
    source = marked.lexer(
      await fetch(markdown_file).then((response) => response.text())
    );
    marked.walkTokens(source, (token) => {
      console.log(token);
    });
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
