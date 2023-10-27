<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import type { Item } from "./categories";
  import { onMount } from "svelte";

  export let item: Item;

  let markdown_source = "";
  const long_description_file = item.long_description_file;
  if (long_description_file) {
    onMount(async () => {
      markdown_source = await fetch(long_description_file).then(
        (response) => response.text()
      );
    });
  }
</script>

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
  {#if item.short_description}
    <p>{@html item.short_description}</p>
  {/if}
  {#if markdown_source.length > 0}
    <SvelteMarkdown source={markdown_source} />
  {/if}
</li>
