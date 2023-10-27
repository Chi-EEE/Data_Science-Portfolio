<script lang="ts">
  import type { Item } from "./categories";
  import MarkdownSection from "./MarkdownSection.svelte";

  export let item: Item;
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
  {#if item.markdown_file}
    <MarkdownSection markdown_file={item.markdown_file} />
  {/if}
</li>
